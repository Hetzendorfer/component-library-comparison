// ShadcnShowcaseApp.tsx
// -----------------------------------------------------------------------------
// A **self‑contained React + Tailwind** web app that demonstrates a handful of
// shadcn/ui components in a small, coherent layout: Navbar, Hero, Features,
// FAQ, and a footer.  Drop this file into your Vite/CRA project as App.tsx and
// ensure your aliases resolve "../components/ui/*" to the shadcn copies.
// -----------------------------------------------------------------------------

import React, { useState } from "react";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
} from "../components/ui/menubar";
import { Button } from "../components/ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "../components/ui/dialog";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "../components/ui/card";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "../components/ui/tabs";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../components/ui/accordion";
import { Toaster, toast } from "sonner";

export default function ShadcnShowcaseApp() {
    const [tab, setTab] = useState("react");
    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* ── Header / Navbar ─────────────────────────────────────────────── */}
            <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b">
                <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-2">
                    <h1 className="font-bold text-xl">shadcn/ui Showcase</h1>
                    <Menubar className="bg-transparent border-none">
                        <MenubarMenu>
                            <MenubarTrigger className="cursor-pointer">
                                Components
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem
                                    onSelect={() => toast("You clicked Hero")}
                                >
                                    Hero
                                </MenubarItem>
                                <MenubarItem
                                    onSelect={() => toast("You clicked FAQ")}
                                >
                                    FAQ
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </header>

            {/* ── Hero Section ─────────────────────────────────────────────────── */}
            <section className="bg-muted py-24">
                <div className="mx-auto max-w-4xl text-center px-4">
                    <h2 className="text-4xl font-extrabold tracking-tight mb-4">
                        Beautifully crafted components
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Built with Radix UI, Tailwind CSS and
                        class-variance-authority.
                    </p>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg">Show live code</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Live code example</DialogTitle>
                                <DialogDescription className="mb-4">
                                    Here’s where you could embed StackBlitz or
                                    CodeSandbox.
                                </DialogDescription>
                            </DialogHeader>
                            <pre className="bg-muted rounded-md p-4 text-sm">
                                {`<Button onClick={() => toast('Hello world!')}>Toast</Button>`}
                            </pre>
                        </DialogContent>
                    </Dialog>
                </div>
            </section>

            {/* ── Features / Tabs ──────────────────────────────────────────────── */}
            <section className="py-24">
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Features
                    </h2>
                    <Tabs value={tab} onValueChange={setTab} className="w-full">
                        <TabsList className="mb-8 mx-auto w-fit">
                            <TabsTrigger value="react">React</TabsTrigger>
                            <TabsTrigger value="accessibility">
                                Accessibility
                            </TabsTrigger>
                            <TabsTrigger value="customize">
                                Customize
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="react">
                            <div className="grid sm:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "TypeScript",
                                        desc: "Fully typed components.",
                                    },
                                    {
                                        title: "Hooks",
                                        desc: "Headless logic via Radix.",
                                    },
                                    {
                                        title: "Composable",
                                        desc: "Compose like Lego bricks.",
                                    },
                                ].map((f) => (
                                    <Card
                                        key={f.title}
                                        className="hover:shadow-md transition-shadow"
                                    >
                                        <CardHeader>
                                            <CardTitle>{f.title}</CardTitle>
                                            <CardDescription>
                                                {f.desc}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button
                                                variant="outline"
                                                onClick={() =>
                                                    toast.success(f.title)
                                                }
                                            >
                                                Try it
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="accessibility">
                            <Card className="mx-auto max-w-xl">
                                <CardHeader>
                                    <CardTitle>WAI‑ARIA compliant</CardTitle>
                                    <CardDescription>
                                        All primitives follow ARIA guidelines
                                        out of the box.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </TabsContent>
                        <TabsContent value="customize">
                            <Card className="mx-auto max-w-xl">
                                <CardHeader>
                                    <CardTitle>Tailwind first</CardTitle>
                                    <CardDescription>
                                        Customize via utility classes or cva
                                        variants.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* ── FAQ / Accordion ──────────────────────────────────────────────── */}
            <section className="bg-muted py-24">
                <div className="mx-auto max-w-3xl px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-2">
                        <AccordionItem value="q1">
                            <AccordionTrigger>
                                Is this production‑ready?
                            </AccordionTrigger>
                            <AccordionContent>
                                Absolutely! shadcn/ui is battle‑tested.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q2">
                            <AccordionTrigger>
                                Can I tree‑shake unused styles?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes – Tailwind purges CSS in prod builds.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* ── Footer ───────────────────────────────────────────────────────── */}
            <footer className="py-12 text-center text-sm text-muted-foreground">
                Built with <strong>shadcn/ui</strong> — © 2025
            </footer>

            {/* Toast outlet */}
            <Toaster position="bottom-right" richColors />
        </div>
    );
}
