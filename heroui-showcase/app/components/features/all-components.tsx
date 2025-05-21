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
    Link,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@heroui/react";
import { Alert } from "@heroui/react";
import { Avatar } from "@heroui/react";
import { Badge } from "@heroui/react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Button } from "@heroui/react";
import { Calendar } from "@heroui/react";
import { Card } from "@heroui/react";
import { Checkbox } from "@heroui/react";
import { Drawer, DrawerContent, DrawerHeader } from "@heroui/react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@heroui/react";
import { Form, Input, Textarea } from "@heroui/react";
import { InputOtp } from "@heroui/react";
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
import { Toaster, toast } from "sonner";
import AutoCompleteUsage from "./autocomplete";
import { CalendarDate } from "@internationalized/date";
import DrawerComp from "./drawer";

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
            <Toaster richColors />
            {/* Accordion */}
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
                    <Button
                        radius="full"
                        onClick={() => toast.success("success")}
                    >
                        Full
                    </Button>
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
                        placeholderValue={new CalendarDate(1995, 11, 6)}
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
                <Button type="submit">Submit</Button>
            </Form>
            {/* Modal */}
            <Modal>
                <Button variant="bordered">Open modal</Button>
                <ModalContent>
                    <ModalHeader>
                        <h2>Modal</h2>
                    </ModalHeader>
                    <div className="p-4">Modal content…</div>
                </ModalContent>
            </Modal>
            {/* Pagination */}
            <Pagination total={10} initialPage={2} />
            {/* Progress */}
            <Progress aria-label="loading…" value={60} className="max-w-sm" />
            {/* RadioGroup */}
            <RadioGroup defaultValue="a" orientation="horizontal">
                <Radio value="a">A</Radio>
                <Radio value="b">B</Radio>
            </RadioGroup>
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
            <Skeleton className="w-48 h-8 rounded-lg" />
            {/* Slider */}
            <Slider
                aria-label="Volume"
                value={sliderVal}
                onChange={handleSliderChange}
            />
            {/* Switch */}
            <div className="flex items-center gap-3">
                <Switch isSelected={switchOn} onValueChange={setSwitchOn} />
                <span>Enable</span>
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
            {/* Tooltip */}
            <Tooltip content="I am a tooltip">
                <Button>Hover me</Button>
            </Tooltip>
        </div>
    );
}
