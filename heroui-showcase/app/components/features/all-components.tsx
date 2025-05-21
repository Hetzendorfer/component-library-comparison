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

            {/* Alert */}
            <section>
                <h2 className="font-semibold text-xl mb-4">Alert</h2>
                <Alert color="warning" variant="bordered">
                    Heads up! This is an alert component.
                </Alert>
            </section>

            {/* Avatar + Badge */}
            <section className="flex items-center gap-6">
                <Avatar src="https://i.pravatar.cc/100" size="lg" />
                <Badge color="success" variant="solid">
                    NEW
                </Badge>
            </section>

            {/* Breadcrumbs */}
            <section>
                <Breadcrumbs>
                    <BreadcrumbItem href="#">Home</BreadcrumbItem>
                    <BreadcrumbItem isCurrent>Components</BreadcrumbItem>
                </Breadcrumbs>
            </section>

            {/* Button + toast */}
            <section>
                <Button onClick={() => toast.success("Hello HeroUI!")}>
                    Toast
                </Button>
            </section>

            {/* Calendar */}
            <section>
                <Popover>
                    <PopoverTrigger>
                        <Button variant="bordered">
                            {/* {date ? date.toLocaleDateString() : "Pick date"} */}
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
            <Card className="max-w-sm">
                <p className="p-4">Simple card</p>
            </Card>

            {/* Checkbox */}
            <section className="flex items-center gap-3">
                <Checkbox isSelected={checked} onValueChange={setChecked} />
                <span>Check me</span>
            </section>

            {/* Drawer */}
            <Drawer>
                <Button variant="bordered">Open Drawer</Button>
                <DrawerContent>
                    <DrawerHeader>
                        <h2>Drawer Title</h2>
                    </DrawerHeader>
                    <div className="p-4">Drawer body…</div>
                </DrawerContent>
            </Drawer>

            {/* Dropdown */}
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="bordered">Open dropdown</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Actions">
                    <DropdownItem key="edit">Edit</DropdownItem>
                    <DropdownItem key="delete">Delete</DropdownItem>
                </DropdownMenu>
            </Dropdown>

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
