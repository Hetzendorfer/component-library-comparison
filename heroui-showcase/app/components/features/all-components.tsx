// AllHeroUIComponentsDemo.tsx
// -----------------------------------------------------------------------------
// Plain‑React playground that swaps **shadcn/ui** for **HeroUI** equivalents.
// Several shadcn‑specific primitives (e.g. Resizable, Command) don’t have 1‑to‑1
// matches in HeroUI, so they’ve been omitted.  Adjust the import list to suit
// your install style: either the monorepo package `@heroui/react` (shown below)
// or individual packages like `@heroui/accordion`.
// -----------------------------------------------------------------------------

import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    addToast,
    CardBody,
    CardFooter,
    CardHeader,
    CheckboxGroup,
    Chip,
    CircularProgress,
    Code,
    DateInput,
    DatePicker,
    DateRangePicker,
    Divider,
    Image,
    InputOtp,
    Kbd,
    Link,
    Listbox,
    ListboxItem,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NumberInput,
    RangeCalendar,
    Snippet,
    Spacer,
    Spinner,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    TimeInput,
    ToastProvider,
    User,
} from "@heroui/react";
import { Alert } from "@heroui/react";
import { Avatar } from "@heroui/react";
import { Badge } from "@heroui/react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Button } from "@heroui/react";
import { Calendar } from "@heroui/react";
import { Card } from "@heroui/react";
import { Checkbox } from "@heroui/react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@heroui/react";
import { Form, Input, Textarea } from "@heroui/react";
import { Modal, ModalContent, ModalHeader } from "@heroui/react";
import { Pagination } from "@heroui/react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import { Progress } from "@heroui/react";
import { RadioGroup, Radio } from "@heroui/react";
import { ScrollShadow } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
import { Skeleton } from "@heroui/react";
import { Slider } from "@heroui/react";
import { Switch } from "@heroui/react";
import { Table } from "@heroui/react";
import { Tabs, Tab } from "@heroui/react";
import { Tooltip } from "@heroui/react";
import AutoCompleteUsage from "./autocomplete";
import {
    CalendarDate,
    getLocalTimeZone,
    Time,
    today,
} from "@internationalized/date";
import DrawerComp from "./drawer";
import ModalImpl from "./modal";
import { Link as LinkRouter } from "react-router";

export default function AllHeroUIComponentsDemo() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [checked, setChecked] = useState(false);
    const [sliderVal, setSliderVal] = useState(40);
    const [switchOn, setSwitchOn] = useState(false);
    const [tab, setTab] = useState("one");

    function handleDateSelect(event: React.SyntheticEvent<HTMLDivElement>) {
        // TODO: Extract date from event if possible
        console.log(event);
    }

    function handleSliderChange(value: number | number[]) {
        if (typeof value === "number") {
            setSliderVal(value);
        }
    }

    function handleTabChange(key: React.Key) {
        setTab(String(key));
    }

    // return <p>Du Wichser</p>;

    return (
        <div className="max-w-5xl mx-auto py-10 flex flex-col gap-16">
            <Navbar>
                <NavbarBrand>
                    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
                        <path
                            clipRule="evenodd"
                            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                            fill="currentColor"
                            fillRule="evenodd"
                        />
                    </svg>
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link aria-current="page" href="#">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            as={Link}
                            color="primary"
                            href="#"
                            variant="flat"
                        >
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <ToastProvider />
            {/* Accordion */}
            <LinkRouter to={{ pathname: "/showcase" }}>Showcase</LinkRouter>
            <section>
                <h2 className="font-semibold text-xl mb-4">Accordion</h2>
                <Accordion defaultExpandedKeys={["1"]} className="max-w-md">
                    <AccordionItem key="1" title="What is HeroUI?">
                        Fully‑featured React component library.
                    </AccordionItem>
                    <AccordionItem key="2" title="Why Tailwind?">
                        Utility‑first styling that’s easy to override.
                    </AccordionItem>
                </Accordion>
            </section>
            {/* Accordion */}
            <section>
                <h2 className="font-semibold text-xl mb-4">Autocomplete</h2>
                <AutoCompleteUsage />
            </section>
            {/* Alert */}
            <section>
                <h2 className="font-semibold text-xl mb-4">Alert</h2>
                {[
                    "default",
                    "primary",
                    "secondary",
                    "success",
                    "warning",
                    "danger",
                ].map((color) => (
                    <div key={color} className="w-full flex items-center my-3">
                        <Alert
                            color={color as any}
                            title={`This is a ${color} alert`}
                        />
                    </div>
                ))}
            </section>
            {/* Avatar + Badge */}
            <section className="flex items-center gap-6">
                <div className="flex gap-4 items-center">
                    <Avatar
                        className="w-6 h-6 text-tiny"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                    <Avatar
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                    />
                    <Avatar
                        size="md"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                    <Avatar
                        size="lg"
                        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                    />
                    <Avatar
                        className="w-20 h-20 text-large"
                        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <Badge color="primary" content="5" size="sm">
                        <Avatar
                            radius="md"
                            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                        />
                    </Badge>
                    <Badge color="primary" content="5" size="md">
                        <Avatar
                            radius="md"
                            src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
                        />
                    </Badge>
                    <Badge color="primary" content="5" size="lg">
                        <Avatar
                            radius="md"
                            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                        />
                    </Badge>
                </div>
            </section>
            {/* Breadcrumbs */}
            <section>
                <Breadcrumbs>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Music</BreadcrumbItem>
                    <BreadcrumbItem>Artist</BreadcrumbItem>
                    <BreadcrumbItem>Album</BreadcrumbItem>
                    <BreadcrumbItem>Song</BreadcrumbItem>
                </Breadcrumbs>
            </section>
            {/* Button + toast */}
            <section>
                <div className="flex gap-4 items-center">
                    <Button radius="full">Full</Button>
                    <Button radius="lg">Large</Button>
                    <Button radius="md">Medium</Button>
                    <Button radius="sm">Small</Button>
                    <Button radius="none">None</Button>
                </div>
            </section>
            {/* Calendar */}
            <section>
                <Popover>
                    <PopoverTrigger>
                        <Button variant="bordered">
                            {date ? date.toLocaleDateString() : "Pick date"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Calendar
                            aria-label="date"
                            onSelect={handleDateSelect}
                        />
                    </PopoverContent>
                </Popover>
            </section>
            {/* Card */}
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="heroui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">HeroUI</p>
                        <p className="text-small text-default-500">
                            heroui.com
                        </p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>
                        Make beautiful websites regardless of your design
                        experience.
                    </p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href="https://github.com/heroui-inc/heroui"
                    >
                        Visit source code on GitHub.
                    </Link>
                </CardFooter>
            </Card>
            {/* Checkbox */}
            <section className="flex items-center gap-3">
                <CheckboxGroup
                    defaultValue={["buenos-aires", "london"]}
                    label="Select cities"
                >
                    <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                    <Checkbox value="sydney">Sydney</Checkbox>
                    <Checkbox value="san-francisco">San Francisco</Checkbox>
                    <Checkbox value="london">London</Checkbox>
                    <Checkbox value="tokyo">Tokyo</Checkbox>
                </CheckboxGroup>
            </section>
            {/* Chip */}
            <section className="flex items-center gap-3">
                <Chip>Chip</Chip>
            </section>
            {/* Chip */}
            <section className="flex items-center gap-3">
                <CircularProgress aria-label="Loading..." />
            </section>
            {/* Code */}
            <section className="flex items-center gap-3">
                <div className="flex flex-col gap-4">
                    <Code size="sm">npm install @heroui/react</Code>
                    <Code size="md">npm install @heroui/react</Code>
                    <Code size="lg">npm install @heroui/react</Code>
                </div>
            </section>
            {/* Date Input */}
            <section className="flex items-center gap-3">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <DateInput
                        className="max-w-sm"
                        label={"Birth date"}
                        placeholderValue={new CalendarDate(1995, 11, 6) as any}
                    />
                </div>
            </section>
            {/* Date Picker */}
            <section className="flex items-center gap-3">
                <DatePicker className="max-w-[284px]" label="Birth date" />;
            </section>
            {/* Date Range Picker */}
            <section className="flex items-center gap-3">
                <DateRangePicker className="max-w-xs" label="Stay duration" />;
            </section>
            {/* Divider*/}
            <section className="flex items-center gap-3">
                <div className="max-w-md">
                    <div className="space-y-1">
                        <h4 className="text-medium font-medium">
                            HeroUI Components
                        </h4>
                        <p className="text-small text-default-400">
                            Beautiful, fast and modern React UI library.
                        </p>
                    </div>
                    <Divider className="my-4" />
                    <div className="flex h-5 items-center space-x-4 text-small">
                        <div>Blog</div>
                        <Divider orientation="vertical" />
                        <div>Docs</div>
                        <Divider orientation="vertical" />
                        <div>Source</div>
                    </div>
                </div>
            </section>

            {/* Drawer */}
            <DrawerComp />
            {/* Dropdown */}
            <section>
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="bordered">Open Menu</Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">New file</DropdownItem>
                        <DropdownItem key="copy">Copy link</DropdownItem>
                        <DropdownItem key="edit">Edit file</DropdownItem>
                        <DropdownItem
                            key="delete"
                            className="text-danger"
                            color="danger"
                        >
                            Delete file
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </section>
            {/* Form */}
            <Form className="space-y-4 max-w-sm">
                <label>Email</label>
                <Input type="email" placeholder="you@example.com" />
                <label>Message</label>
                <Textarea placeholder="Your message…" />
                <div className="flex gap-2">
                    <Button type="submit" color="primary">
                        Submit
                    </Button>
                    <Button type="reset" variant="flat">
                        Reset
                    </Button>
                </div>
            </Form>
            {/* Image */}
            <section>
                <Image
                    alt="HeroUI hero Image"
                    src="https://heroui.com/images/hero-card-complete.jpeg"
                    width={300}
                />
            </section>
            {/* Input */}
            <section>
                <Input
                    isDisabled
                    className="max-w-xs"
                    defaultValue="junior@heroui.com"
                    label="Email"
                    type="email"
                />
            </section>
            {/* Input OTP */}
            <section>
                <div className="flex flex-col items-start gap-2">
                    <InputOtp length={4} />
                </div>
            </section>
            {/* KBG */}
            <section>
                <div className="flex gap-4">
                    <Kbd keys={["command"]}>K</Kbd>
                    <Kbd keys={["command", "shift"]}>N</Kbd>
                    <Kbd keys={["option", "command"]}>P</Kbd>
                </div>
            </section>
            {/* Link */}
            <section>
                <div className="flex gap-4">
                    <Link href="#">Default Link</Link>
                </div>
            </section>
            {/* Listbox */}
            <section>
                <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
                    <Listbox
                        aria-label="Actions"
                        onAction={(key) => alert(key)}
                    >
                        <ListboxItem key="new">New file</ListboxItem>
                        <ListboxItem key="copy">Copy link</ListboxItem>
                        <ListboxItem key="edit">Edit file</ListboxItem>
                        <ListboxItem
                            key="delete"
                            className="text-danger"
                            color="danger"
                        >
                            Delete file
                        </ListboxItem>
                    </Listbox>
                </div>
            </section>
            {/* Modal */}
            <ModalImpl />
            {/* NumberInput */}
            <section>
                <NumberInput
                    className="max-w-xs"
                    placeholder="Enter the amount"
                />
            </section>
            {/* Pagination */}
            <Pagination total={10} initialPage={2} />
            {/* Popover */}
            <section>
                <Popover placement="right">
                    <PopoverTrigger>
                        <Button>Open Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">
                                Popover Content
                            </div>
                            <div className="text-tiny">
                                This is the popover content
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </section>
            {/* Progress */}
            <div className="flex flex-col gap-6 w-full max-w-md">
                <Progress aria-label="Loading..." size="sm" value={30} />
                <Progress aria-label="Loading..." size="md" value={40} />
                <Progress aria-label="Loading..." size="lg" value={50} />
            </div>
            {/* RadioGroup */}
            <RadioGroup label="Select your favorite city">
                <Radio value="buenos-aires">Buenos Aires</Radio>
                <Radio value="sydney">Sydney</Radio>
                <Radio value="san-francisco">San Francisco</Radio>
                <Radio value="london">London</Radio>
                <Radio value="tokyo">Tokyo</Radio>
            </RadioGroup>
            {/* RangeCalendar */}
            <div className="flex gap-x-4">
                <RangeCalendar aria-label="Date (No Selection)" />
            </div>
            {/* ScrollShadow */}
            <ScrollShadow className="h-32 max-w-sm border rounded-lg p-3 space-y-1">
                {Array.from({ length: 20 }).map((_, i) => (
                    <p key={i}>Item {i + 1}</p>
                ))}
            </ScrollShadow>
            {/* Select */}
            <Select
                label="Select fruit"
                placeholder="Choose…"
                className="max-w-xs"
            >
                <SelectItem key="apple">Apple</SelectItem>
                <SelectItem key="banana">Banana</SelectItem>
            </Select>
            {/* Skeleton */}
            <Card className="w-[200px] space-y-5 p-4" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300" />
                </Skeleton>
                <div className="space-y-3">
                    <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                    </Skeleton>
                </div>
            </Card>
            {/* Slider */}
            <Slider
                className="max-w-md"
                defaultValue={0.4}
                label="Temperature"
                maxValue={1}
                minValue={0}
                step={0.01}
            />
            {/* Snippet */}
            <div className="flex flex-wrap gap-4">
                <Snippet size="sm">npm install @heroui/react</Snippet>
                <Snippet size="md">npm install @heroui/react</Snippet>
                <Snippet size="lg">npm install @heroui/react</Snippet>
            </div>
            {/* Spacer */}
            <div className="flex">
                <CustomCard />
                <Spacer x={4} />
                <CustomCard />
                <Spacer x={4} />
                <CustomCard />
            </div>
            {/* Spinner */}
            <div className="flex gap-4">
                <Spinner color="default" />
                <Spinner color="primary" />
                <Spinner color="secondary" />
                <Spinner color="success" />
                <Spinner color="warning" />
                <Spinner color="danger" />
            </div>
            {/* Switch */}
            <div className="flex items-center gap-3">
                <Switch defaultSelected>Automatic updates</Switch>
            </div>
            {/* Table */}
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>ROLE</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>Tony Reichert</TableCell>
                        <TableCell>CEO</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>Zoey Lang</TableCell>
                        <TableCell>Technical Lead</TableCell>
                        <TableCell>Paused</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>Jane Fisher</TableCell>
                        <TableCell>Senior Developer</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell>William Howard</TableCell>
                        <TableCell>Community Manager</TableCell>
                        <TableCell>Vacation</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            {/* Tabs */}
            <div className="flex w-full flex-col">
                <Tabs aria-label="Options">
                    <Tab key="photos" title="Photos">
                        <Card>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="music" title="Music">
                        <Card>
                            <CardBody>
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="videos" title="Videos">
                        <Card>
                            <CardBody>
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
            {/* Toast */}
            <div className="flex flex-wrap gap-2">
                {[
                    "Default",
                    "Primary",
                    "Secondary",
                    "Success",
                    "Warning",
                    "Danger",
                ].map((color) => (
                    <Button
                        key={color}
                        color={color.toLowerCase() as any}
                        variant={"flat"}
                        onPress={() =>
                            addToast({
                                title: "Toast title",
                                description: "Toast displayed successfully",
                                color: color.toLowerCase() as any,
                            })
                        }
                    >
                        {color}
                    </Button>
                ))}
            </div>
            {/* Textarea */}
            <Textarea
                className="max-w-xs"
                label="Description"
                placeholder="Enter your description"
            />
            {/* TimeInput */}
            <div className="flex flex-wrap gap-4">
                <TimeInput label="Event Time" />
                <TimeInput defaultValue={new Time(11, 45)} label="Event Time" />
            </div>
            {/* Tooltip */}
            <Tooltip content="I am a tooltip">
                <Button>Hover me</Button>
            </Tooltip>
            {/* User */}
            <User
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                description="Product Designer"
                name="Jane Doe"
            />
        </div>
    );
}

function CustomCard() {
    return (
        <Card className="w-[200px] space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300" />
            </Skeleton>
            <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                </Skeleton>
            </div>
        </Card>
    );
}
