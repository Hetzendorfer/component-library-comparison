// AllShadcnComponentsDemo.tsx
// -----------------------------------------------------------------------------
// A **plain React** demo (no Next.js, no routing) that renders every shadcn/ui
// component *once*.  No extra layout wrappers – just one root <div />.  Adjust
// the import paths ("../ui/..." → your folder structure) as needed.
// -----------------------------------------------------------------------------

import React, { useState } from "react";

// ─── Imports ────────────────────────────────────────────────────────────────
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../ui/alert-dialog";
import { AspectRatio } from "../ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { Checkbox } from "../ui/checkbox";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "../ui/collapsible";
// import {
//     Combobox,
//     ComboboxContent,
//     ComboboxItem,
//     ComboboxTrigger,
// } from "../ui/combobox";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "../ui/command";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "../ui/context-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../ui/drawer";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card";
import { Input } from "../ui/input";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "../ui/input-otp";
import { Label } from "../ui/label";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "../ui/menubar";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "../ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Progress } from "../ui/progress";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "../ui/resizable";
import { ScrollArea } from "../ui/scroll-area";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { Skeleton } from "../ui/skeleton";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Textarea } from "../ui/textarea";
import { Toggle } from "../ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";
import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form";

// ─── Component ──────────────────────────────────────────────────────────────
export default function AllShadcnComponentsDemo() {
    // Shared state for some widgets
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [checked, setChecked] = useState(false);
    const [sliderVal, setSliderVal] = useState([25]);
    const [switchOn, setSwitchOn] = useState(false);

    const form = useForm({
        defaultValues: {
            asd: "",
        },
    });

    return (
        <div className="max-w-5xl mx-auto">
            <TooltipProvider delayDuration={0}>
                {/* Global toast outlet */}
                <Toaster position="bottom-right" richColors />

                <div
                    style={{
                        padding: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "3rem",
                    }}
                >
                    {/* Accordion */}
                    <section>
                        <h2>Accordion</h2>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Expand</AccordionTrigger>
                                <AccordionContent>
                                    Hidden content
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* Alert */}
                    <section>
                        <h2>Alert</h2>
                        <Alert>
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                This is an alert component.
                            </AlertDescription>
                        </Alert>
                    </section>

                    {/* Alert Dialog */}
                    <section>
                        <h2>Alert Dialog</h2>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button>Show dialog</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Confirm</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This cannot be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction>
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </section>

                    {/* AspectRatio */}
                    <section>
                        <h2>AspectRatio</h2>
                        <AspectRatio
                            ratio={16 / 7}
                            style={{
                                background: "#e5e7eb",
                                borderRadius: 8,
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src="https://picsum.photos/640/360"
                                alt="random"
                                style={{
                                    width: "600px",
                                    objectFit: "cover",
                                }}
                            />
                        </AspectRatio>
                    </section>

                    {/* Avatar & Badge */}
                    <section>
                        <h2>Avatar & Badge</h2>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 16,
                            }}
                        >
                            <Avatar>
                                <AvatarImage src="https://i.pravatar.cc/100" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <Badge variant="secondary">New</Badge>
                        </div>
                    </section>

                    {/* Breadcrumb */}
                    <section>
                        <h2>Breadcrumb</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Components</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </section>

                    {/* Button & toast */}
                    <section>
                        <h2>Button & Toast</h2>
                        <Button onClick={() => toast.success("Hello!")}>
                            Toast
                        </Button>
                    </section>

                    {/* Calendar */}
                    <section>
                        <h2>Calendar</h2>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    style={{
                                        width: 200,
                                        justifyContent: "flex-start",
                                    }}
                                >
                                    {date
                                        ? date.toLocaleDateString()
                                        : "Pick date"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                style={{ width: "auto", padding: 0 }}
                            >
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                />
                            </PopoverContent>
                        </Popover>
                    </section>

                    {/* Card */}
                    <section>
                        <h2>Card</h2>
                        <Card style={{ maxWidth: 320 }}>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>
                                    Small description
                                </CardDescription>
                            </CardHeader>
                            <CardContent>Body text…</CardContent>
                            <CardFooter>
                                <Button>Action</Button>
                            </CardFooter>
                        </Card>
                    </section>

                    {/* Carousel */}
                    <section>
                        <h2>Carousel</h2>
                        <Carousel style={{ maxWidth: 320 }}>
                            <CarouselContent>
                                {[1, 2, 3].map((n) => (
                                    <CarouselItem
                                        key={n}
                                        style={{
                                            background: "#f3f4f6",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: 160,
                                            borderRadius: 8,
                                        }}
                                    >
                                        {n}
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </section>

                    {/* Checkbox */}
                    <section>
                        <h2>Checkbox</h2>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            <Checkbox
                                id="chk"
                                checked={checked}
                                onCheckedChange={(v) => setChecked(!!v)}
                            />
                            <Label htmlFor="chk">Check me</Label>
                        </div>
                    </section>

                    {/* Collapsible */}
                    <section>
                        <h2>Collapsible</h2>
                        <Collapsible>
                            <CollapsibleTrigger asChild>
                                <Button variant="outline">Toggle</Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent
                                style={{
                                    marginTop: 8,
                                    border: "1px solid #e5e7eb",
                                    borderRadius: 6,
                                    padding: 8,
                                }}
                            >
                                Hidden content
                            </CollapsibleContent>
                        </Collapsible>
                    </section>

                    {/* Command */}
                    <section>
                        <h2>Command</h2>
                        <Command
                            style={{
                                maxWidth: 320,
                                border: "1px solid #e5e7eb",
                                borderRadius: 8,
                            }}
                        >
                            <CommandInput placeholder="Type a fruit…" />
                            <CommandList>
                                <CommandEmpty>No results</CommandEmpty>
                                <CommandGroup heading="Fruits">
                                    <CommandItem>Apple</CommandItem>
                                    <CommandItem>Banana</CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </section>

                    {/* Context Menu */}
                    <section>
                        <h2>Context Menu</h2>
                        <ContextMenu>
                            <ContextMenuTrigger asChild>
                                <Button variant="outline">
                                    Right click me
                                </Button>
                            </ContextMenuTrigger>
                            <ContextMenuContent>
                                <ContextMenuItem>Copy</ContextMenuItem>
                                <ContextMenuItem>Delete</ContextMenuItem>
                            </ContextMenuContent>
                        </ContextMenu>
                    </section>

                    {/* Dialog */}
                    <section>
                        <h2>Dialog</h2>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Open dialog</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Simple Dialog</DialogTitle>
                                    <DialogDescription>
                                        Example description
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </section>

                    {/* Drawer */}
                    <section>
                        <h2>Drawer</h2>
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant="outline">Open drawer</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>Drawer Title</DrawerTitle>
                                </DrawerHeader>
                                <div style={{ padding: 16 }}>
                                    Drawer content…
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </section>

                    {/* Dropdown Menu */}
                    <section>
                        <h2>Dropdown Menu</h2>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Open dropdown</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </section>

                    {/* Form */}
                    <section>
                        <h2>Form</h2>
                        <Form {...form}>
                            <form
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 16,
                                    maxWidth: 320,
                                }}
                            >
                                <FormField
                                    control={form.control}
                                    name="asd"
                                    render={() => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="you@example.com"
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                We'll never share it.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                ></FormField>
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </section>

                    {/* Hover Card */}
                    <section>
                        <h2>Hover Card</h2>
                        <HoverCard openDelay={200}>
                            <HoverCardTrigger asChild>
                                <Button variant="link">Hover me</Button>
                            </HoverCardTrigger>
                            <HoverCardContent style={{ width: 200 }}>
                                Some info…
                            </HoverCardContent>
                        </HoverCard>
                    </section>

                    {/* Input & Input OTP */}
                    <section>
                        <h2>Input & Input OTP</h2>
                        <Input
                            placeholder="Standard input"
                            style={{ maxWidth: 320, marginBottom: 8 }}
                        />
                        <InputOTP maxLength={6} style={{ maxWidth: 320 }}>
                            <InputOTPGroup>
                                {[0, 1, 2].map((i) => (
                                    <InputOTPSlot key={i} index={i} />
                                ))}
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                {[3, 4, 5].map((i) => (
                                    <InputOTPSlot key={i} index={i} />
                                ))}
                            </InputOTPGroup>
                        </InputOTP>
                    </section>

                    {/* Label */}
                    <section>
                        <h2>Label</h2>
                        <Label htmlFor="lbl">Name</Label>
                        <Input
                            id="lbl"
                            placeholder="with label"
                            style={{
                                maxWidth: 200,
                                display: "block",
                                marginTop: 4,
                            }}
                        />
                    </section>

                    {/* Menubar */}
                    <section>
                        <h2>Menubar</h2>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>File</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>New</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </section>

                    {/* Navigation Menu */}
                    <section>
                        <h2>Navigation Menu</h2>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        Docs
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent
                                        style={{ padding: 16 }}
                                    >
                                        Docs content
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink style={{ padding: 8 }}>
                                        GitHub
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </section>

                    {/* Pagination */}
                    <section>
                        <h2>Pagination</h2>
                        <Pagination>
                            <PaginationContent>
                                {[1, 2, 3].map((n) => (
                                    <PaginationItem key={n}>
                                        <PaginationLink
                                            href="#"
                                            isActive={n === 2}
                                        >
                                            {n}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}
                            </PaginationContent>
                        </Pagination>
                    </section>

                    {/* Popover */}
                    <section>
                        <h2>Popover</h2>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline">Open popover</Button>
                            </PopoverTrigger>
                            <PopoverContent style={{ width: 200 }}>
                                Popover text
                            </PopoverContent>
                        </Popover>
                    </section>

                    {/* Progress */}
                    <section>
                        <h2>Progress</h2>
                        <Progress value={70} style={{ maxWidth: 320 }} />
                    </section>

                    {/* Radio Group */}
                    <section>
                        <h2>Radio Group</h2>
                        <RadioGroup
                            defaultValue="a"
                            style={{ display: "flex", gap: 16 }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                }}
                            >
                                <RadioGroupItem value="a" id="ra" />
                                <Label htmlFor="ra">A</Label>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                }}
                            >
                                <RadioGroupItem value="b" id="rb" />
                                <Label htmlFor="rb">B</Label>
                            </div>
                        </RadioGroup>
                    </section>

                    {/* Resizable */}
                    <section>
                        <h2>Resizable</h2>
                        <ResizablePanelGroup
                            direction="horizontal"
                            style={{
                                border: "1px solid #e5e7eb",
                                borderRadius: 6,
                                minHeight: 120,
                            }}
                        >
                            <ResizablePanel
                                defaultSize={50}
                                style={{
                                    background: "#f3f4f6",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                One
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel
                                defaultSize={50}
                                style={{
                                    background: "#e5e7eb",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Two
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </section>

                    {/* ScrollArea */}
                    <section>
                        <h2>Scroll Area</h2>
                        <ScrollArea
                            style={{
                                height: 120,
                                maxWidth: 320,
                                border: "1px solid #e5e7eb",
                                borderRadius: 6,
                                padding: 8,
                            }}
                        >
                            {Array.from({ length: 20 }).map((_, i) => (
                                <p key={i}>Item {i + 1}</p>
                            ))}
                        </ScrollArea>
                    </section>

                    {/* Select */}
                    <section>
                        <h2>Select</h2>
                        <Select>
                            <SelectTrigger style={{ width: 200 }}>
                                <SelectValue placeholder="Pick one" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                            </SelectContent>
                        </Select>
                    </section>

                    {/* Separator */}
                    <Separator />

                    {/* Sheet */}
                    <section>
                        <h2>Sheet</h2>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline">Open sheet</Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Sheet title</SheetTitle>
                                    <SheetDescription>
                                        Description…
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </section>

                    {/* Skeleton */}
                    <section>
                        <h2>Skeleton</h2>
                        <Skeleton style={{ width: 200, height: 32 }} />
                    </section>

                    {/* Slider */}
                    <section>
                        <h2>Slider</h2>
                        <Slider
                            value={sliderVal}
                            onValueChange={setSliderVal}
                            max={100}
                            step={1}
                            style={{ maxWidth: 320 }}
                        />
                    </section>

                    {/* Switch */}
                    <section>
                        <h2>Switch</h2>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            <Switch
                                id="sw"
                                checked={switchOn}
                                onCheckedChange={setSwitchOn}
                            />
                            <Label htmlFor="sw">Enable</Label>
                        </div>
                    </section>

                    {/* Table */}
                    <section>
                        <h2>Table</h2>
                        <Table style={{ maxWidth: 480 }}>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Jane Roe</TableCell>
                                    <TableCell>jane@example.com</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>John Smith</TableCell>
                                    <TableCell>john@example.com</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </section>

                    {/* Tabs */}
                    <section>
                        <h2>Tabs</h2>
                        <Tabs defaultValue="a" style={{ maxWidth: 320 }}>
                            <TabsList>
                                <TabsTrigger value="a">A</TabsTrigger>
                                <TabsTrigger value="b">B</TabsTrigger>
                            </TabsList>
                            <TabsContent value="a">Tab A</TabsContent>
                            <TabsContent value="b">Tab B</TabsContent>
                        </Tabs>
                    </section>

                    {/* Textarea */}
                    <section>
                        <h2>Textarea</h2>
                        <Textarea
                            placeholder="Type…"
                            style={{ maxWidth: 320 }}
                        />
                    </section>

                    {/* Toggle & ToggleGroup */}
                    <section>
                        <h2>Toggle & ToggleGroup</h2>
                        <Toggle style={{ marginRight: 8 }}>Toggle</Toggle>
                        <ToggleGroup type="multiple">
                            <ToggleGroupItem value="bold" aria-label="Bold">
                                B
                            </ToggleGroupItem>
                            <ToggleGroupItem value="italic" aria-label="Italic">
                                I
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="underline"
                                aria-label="Underline"
                            >
                                U
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </section>

                    {/* Tooltip */}
                    <section>
                        <h2>Tooltip</h2>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline">Hover</Button>
                            </TooltipTrigger>
                            <TooltipContent>Tooltip text</TooltipContent>
                        </Tooltip>
                    </section>
                </div>
            </TooltipProvider>
        </div>
    );
}
