import Link from "next/link";
import Image from "next/image";
import PhoneMockup from "@/components/PhoneMockup";

const FEATURES = [
    { title: "Bionic Display", desc: `6.9" OLED, 2000 nits peak brightness.` },
    { title: "Pro Camera", desc: "108MP cinematic sensor with pro-grade stabilization." },
    { title: "Titanium Build", desc: "Aerospace-grade durability with ultra-light feel." },
];

const STATS = [
    { label: "Peak Brightness", value: "2000 nits" },
    { label: "Charging", value: "0–70% in 22m" },
    { label: "Camera", value: "108MP" },
    { label: "Warranty", value: "2 Years" },
];

export default function HomePage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
            {/* Ambient gradients */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/25 blur-[120px]" />
                <div className="absolute -bottom-44 right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-[130px]" />
                <div className="absolute top-1/3 left-[-140px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="noise-overlay absolute inset-0 opacity-[0.06]" />
            </div>

            {/* Top nav */}
            <header className="relative z-10">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
                    <Link href="/" className="group flex items-center gap-3">
                        <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                            <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </span>
                        <span className="text-sm font-semibold tracking-wide text-white/90">
                            ULTRA<span className="text-indigo-300">26</span>
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-8 md:flex">
                        <Link href="/products" className="text-sm text-white/70 hover:text-white transition">
                            Products
                        </Link>
                        <Link href="/products" className="text-sm text-white/70 hover:text-white transition">
                            Specs
                        </Link>
                        <Link href="/products" className="text-sm text-white/70 hover:text-white transition">
                            Support
                        </Link>
                        <Link
                            href="/admin"
                            className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
                        >
                            Partner Login
                        </Link>
                    </nav>

                    <Link
                        href="/products"
                        className="md:hidden rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
                    >
                        Explore
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="relative z-10">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-16 pt-10 md:grid-cols-2 md:pt-16">
                    {/* Left */}
                    <div className="animate-fade-up">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 ring-1 ring-white/10 backdrop-blur">
                            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
                            Next generation mobile tech
                        </div>

                        <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight md:text-6xl">
                            Premium phones,{" "}
                            <span className="bg-gradient-to-r from-indigo-300 via-white to-fuchsia-200 bg-clip-text text-transparent">
                                engineered
                            </span>{" "}
                            for the future.
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                            A refined collection built for speed, clarity, and cinema-grade capture. Clean UI, fast checkout,
                            admin-ready catalog — all in one modern experience.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                href="/products"
                                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] active:translate-y-0"
                            >
                                Explore Collection
                                <span className="transition group-hover:translate-x-0.5">→</span>
                            </Link>

                            <Link
                                href="/admin"
                                className="inline-flex items-center justify-center rounded-2xl bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
                            >
                                Partner Login
                            </Link>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {STATS.map((s) => (
                                <div
                                    key={s.label}
                                    className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur"
                                >
                                    <div className="text-lg font-extrabold">{s.value}</div>
                                    <div className="mt-1 text-xs text-white/60">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right (Phones) */}
                    <div className="relative">
                        <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-tr from-indigo-500/10 via-white/5 to-fuchsia-500/10 blur-2xl" />

                        <div className="relative grid grid-cols-2 gap-6">
                            <div className="translate-y-8">
                                <PhoneMockup
                                    src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=320&auto=format&fit=crop"
                                    alt="Phone UI Preview 1"
                                    priority
                                    badge="New"
                                />
                            </div>

                            <div className="-translate-y-2">
                                <PhoneMockup
                                    src="https://images.unsplash.com/photo-1556656793-062ff987b50d?q=80&w=320&auto=format&fit=crop"
                                    alt="Phone UI Preview 2"
                                    badge="Fast"
                                />
                            </div>

                            <div className="col-span-2 mx-auto w-[85%]">
                                <PhoneMockup
                                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=512&auto=format&fit=crop"
                                    alt="Phone UI Preview 3"
                                    badge="Pro"
                                    wide
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature cards */}
            <section className="relative z-10 border-t border-white/10">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <div className="flex items-end justify-between gap-6">
                        <div>
                            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                                Built to feel premium.
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm text-white/60 md:text-base">
                                Glassmorphism, subtle grain, soft glow, and clean spacing — a modern landing page that looks
                                “high-end” immediately.
                            </p>
                        </div>
                        <Link
                            href="/products"
                            className="hidden rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10 md:inline-flex"
                        >
                            View all products →
                        </Link>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {FEATURES.map((f) => (
                            <div
                                key={f.title}
                                className="group rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/[0.07]"
                            >
                                <div className="mb-4 h-10 w-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-white/10" />
                                <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition">
                                    {f.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/60">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 md:hidden">
                        <Link
                            href="/products"
                            className="inline-flex rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
                        >
                            View all products →
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="relative z-10 border-t border-white/10">
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
                    <p>© {new Date().getFullYear()} ULTRA26. All rights reserved.</p>
                    <div className="flex gap-5">
                        <Link href="/products" className="hover:text-white/70 transition">Products</Link>
                        <Link href="/admin" className="hover:text-white/70 transition">Partners</Link>
                        <Link href="/" className="hover:text-white/70 transition">Privacy</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
