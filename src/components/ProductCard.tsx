import Link from "next/link";

export function ProductCard({ p }: { p: any }) {
    return (
        <div className="group relative bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="relative aspect-[4/5] overflow-hidden">
                <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                    {p.category}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1 truncate leading-tight group-hover:text-indigo-400 transition-colors">
                    {p.name}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-black text-white leading-none">
                        ${p.price}
                    </span>
                    <Link
                        href={`/products/${p._id}`}
                        className="p-3 bg-white text-slate-950 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}