// HeroUiShowcaseApp.tsx
import React, { useState, Fragment } from "react";
import { Dialog, Transition, Menu, Tab, Disclosure } from "@headlessui/react";
import {
    Bars3Icon,
    CodeBracketIcon,
    HandRaisedIcon,
    Squares2X2Icon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const features = [
    {
        title: "TypeScript",
        desc: "Fully typed components.",
        icon: CodeBracketIcon,
    },
    {
        title: "Hooks",
        desc: "Headless logic via Radix.",
        icon: HandRaisedIcon,
    },
    {
        title: "Composable",
        desc: "Compose like Lego bricks.",
        icon: Squares2X2Icon,
    },
];

export default function HeroUiShowcaseApp() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* Header / Navbar */}
            <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b">
                <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-2">
                    <h1 className="font-bold text-lg lg:text-xl">
                        HeroUI Showcase
                    </h1>
                    <Menu as="div" className="relative">
                        <Menu.Button className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-slate-100">
                            Components <Bars3Icon className="w-5 h-5" />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right bg-white border border-slate-200 rounded-md shadow-lg focus:outline-none z-50">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() =>
                                                toast("You clicked Hero")
                                            }
                                            className={`block px-4 py-2 w-full text-left ${
                                                active ? "bg-slate-100" : ""
                                            }`}
                                        >
                                            Hero
                                        </button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() =>
                                                toast("You clicked FAQ")
                                            }
                                            className={`block px-4 py-2 w-full text-left ${
                                                active ? "bg-slate-100" : ""
                                            }`}
                                        >
                                            FAQ
                                        </button>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-[radial-gradient(circle_at_center,var(--slate-100)_0%,transparent_70%)] dark:bg-slate-800/40 py-32 xl:py-40">
                <div className="absolute inset-0 -z-10 opacity-20">
                    <svg
                        className="h-full w-full"
                        viewBox="0 0 800 600"
                        fill="none"
                    >
                        <circle cx="400" cy="300" r="300" fill="#c7d2fe" />
                        <circle cx="600" cy="200" r="200" fill="#a5b4fc" />
                        <circle cx="200" cy="400" r="200" fill="#818cf8" />
                    </svg>
                </div>
                <div className="mx-auto max-w-4xl text-center px-4">
                    <h2 className="text-4xl font-extrabold tracking-tight mb-4 font-display">
                        Beautifully crafted components
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                        Built with Headless UI, Tailwind CSS and Heroicons.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsDialogOpen(true)}
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
                    >
                        Show live code
                    </motion.button>

                    {/* Dialog */}
                    <Transition.Root show={isDialogOpen} as={Fragment}>
                        <Dialog
                            as="div"
                            className="relative z-50"
                            onClose={setIsDialogOpen}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                            </Transition.Child>
                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-200"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-100"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="mx-auto w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
                                            <Dialog.Title className="font-bold text-xl mb-1">
                                                Live code example
                                            </Dialog.Title>
                                            <Dialog.Description className="mb-4 text-slate-600">
                                                Here’s where you could embed
                                                StackBlitz or CodeSandbox.
                                            </Dialog.Description>
                                            <pre className="bg-slate-100 rounded-md p-4 text-sm overflow-x-auto">
                                                {`<button onClick={() => toast('Hello world!')}>Toast</button>`}
                                            </pre>
                                            <button
                                                onClick={() =>
                                                    setIsDialogOpen(false)
                                                }
                                                className="mt-4 px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600"
                                            >
                                                Close
                                            </button>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root>
                </div>
            </section>

            {/* Features / Tabs */}
            <section className="py-32 xl:py-40">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Features
                    </h2>
                    <Tab.Group>
                        <Tab.List className="flex justify-center mb-8 space-x-4 bg-slate-100 rounded-lg p-2 w-fit mx-auto">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`px-4 py-2 rounded-lg text-lg font-medium ${
                                            selected
                                                ? "bg-white shadow"
                                                : "hover:bg-white/60"
                                        }`}
                                    >
                                        React
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`px-4 py-2 rounded-lg text-lg font-medium ${
                                            selected
                                                ? "bg-white shadow"
                                                : "hover:bg-white/60"
                                        }`}
                                    >
                                        Accessibility
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`px-4 py-2 rounded-lg text-lg font-medium ${
                                            selected
                                                ? "bg-white shadow"
                                                : "hover:bg-white/60"
                                        }`}
                                    >
                                        Customize
                                    </button>
                                )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    {features.map((f) => (
                                        <div
                                            key={f.title}
                                            className="hover:shadow-md transition-all duration-300 ease-out bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                                        >
                                            <div className="flex items-center space-x-2 p-4">
                                                <f.icon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                                                <div>
                                                    <div className="font-bold">
                                                        {f.title}
                                                    </div>
                                                    <div className="text-slate-500 text-sm">
                                                        {f.desc}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 pt-0">
                                                <button
                                                    className="border border-slate-300 rounded px-4 py-2 hover:bg-slate-100 transition text-sm"
                                                    onClick={() =>
                                                        toast.success(f.title)
                                                    }
                                                >
                                                    Try it
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="mx-auto max-w-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                                    <div className="font-bold">
                                        WAI‑ARIA compliant
                                    </div>
                                    <div className="text-slate-500">
                                        All primitives follow ARIA guidelines
                                        out of the box.
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="mx-auto max-w-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                                    <div className="font-bold">
                                        Tailwind first
                                    </div>
                                    <div className="text-slate-500">
                                        Customize via utility classes or CVA
                                        variants.
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>

            {/* FAQ / Accordion */}
            <section className="bg-slate-100 py-32 xl:py-40">
                <div className="mx-auto max-w-3xl px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
                    <div className="space-y-4">
                        <Disclosure>
                            {({ open }) => (
                                <div className="border rounded-lg bg-white p-4">
                                    <Disclosure.Button className="flex justify-between w-full font-semibold text-left text-lg">
                                        Is this production‑ready?
                                        <ChevronDownIcon
                                            className={`w-5 h-5 transition-transform duration-200 ${
                                                open ? "rotate-180" : ""
                                            }`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="pt-2 text-slate-600">
                                        Absolutely! HeroUI is battle‑tested.
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <div className="border rounded-lg bg-white p-4">
                                    <Disclosure.Button className="flex justify-between w-full font-semibold text-left text-lg">
                                        Can I tree‑shake unused styles?
                                        <ChevronDownIcon
                                            className={`w-5 h-5 transition-transform duration-200 ${
                                                open ? "rotate-180" : ""
                                            }`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="pt-2 text-slate-600">
                                        Yes – Tailwind purges CSS in prod
                                        builds.
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-indigo-400 via-sky-500 to-emerald-400 py-12">
                <p className="text-white text-sm text-center">
                    Built with <strong>HeroUI</strong> — © 2025
                </p>
            </footer>

            <Toaster position="bottom-right" />
        </div>
    );
}
