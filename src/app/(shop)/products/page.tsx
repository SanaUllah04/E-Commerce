import { ProductCard } from "@/components/ProductCard";

export default async function ProductsPage({ searchParams }: any) {
    const q = searchParams?.q ? `q=${encodeURIComponent(searchParams.q)}` : "";
    const url = `${process.env.NEXTAUTH_URL}/api/products${q ? `?${q}` : ""}`;

    const res = await fetch(url, { cache: "no-store" });
    const products = await res.json();

    return (
        <main className="min-h-screen bg-[#020617] pt-28 pb-20">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-1/4 h-1/4 bg-fuchsia-500/5 blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 animate-fade-up">
                    <div>
                        <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-3 block">
                            Ultra26 Series
                        </span>
                        <h1 className="text-5xl font-black text-white tracking-tighter">
                            Our <span className="text-gradient">Products</span>
                        </h1>
                    </div>

                    <form className="relative w-full md:w-96 group" action="/products" method="get">
                        <input
                            name="q"
                            defaultValue={searchParams?.q ?? ""}
                            placeholder="Explore our lineup..."
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-500 outline-none focus:border-white/20 focus:bg-white/[0.08] transition-all backdrop-blur-md"
                        />
                        <button className="absolute right-3 top-2 bottom-2 px-4 bg-white text-slate-950 rounded-xl font-bold text-sm tracking-tighter hover:bg-slate-200 transition-colors">
                            SEARCH
                        </button>
                    </form>
                </div>

                {products.length === 0 ? (
                    <div className="py-40 text-center animate-fade-up delay-100">
                        <h2 className="text-2xl font-bold text-slate-400">No products found.</h2>
                        <p className="text-slate-500 mt-2">Try searching for something else.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 animate-fade-up delay-100">
                        {products.map((p: any) => (
                            <ProductCard key={p._id} p={p} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
