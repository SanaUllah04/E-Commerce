import Image from "next/image";

type Props = {
    src: string;
    alt: string;
    badge?: string;
    priority?: boolean;
    wide?: boolean;
};

export default function PhoneMockup({ src, alt, badge, priority, wide }: Props) {
    return (
        <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-tr from-indigo-500/20 via-white/5 to-fuchsia-500/20 blur-xl" />

            {/* Device */}
            <div
                className={[
                    "relative overflow-hidden rounded-[34px] bg-slate-900/40 ring-1 ring-white/10 backdrop-blur",
                    "shadow-[0_30px_80px_rgba(0,0,0,0.55)]",
                    wide ? "aspect-[16/9]" : "aspect-[9/19]",
                ].join(" ")}
            >
                {/* Top sheen */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.16),transparent_35%)]" />

                {/* Screen image */}
                <div className="absolute inset-[10px] overflow-hidden rounded-[26px] bg-black">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        priority={priority}
                        className="object-cover"
                        sizes={wide ? "(max-width: 768px) 90vw, 520px" : "(max-width: 768px) 45vw, 320px"}
                    />
                    {/* Screen overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
                </div>

                {/* Bezel details */}
                <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-1 ring-white/10" />
                <div className="pointer-events-none absolute left-1/2 top-3 h-4 w-24 -translate-x-1/2 rounded-full bg-black/55 ring-1 ring-white/10" />

                {/* Badge */}
                {badge ? (
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80 ring-1 ring-white/15 backdrop-blur">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {badge}
                    </div>
                ) : null}
            </div>
        </div>
    );
}