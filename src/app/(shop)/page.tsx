import { ProductCard } from "@/components/ProductCard";

async function getFeatured() {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, { cache: "no-store" });
    const all = await res.json();
    return all.filter((p: any) => p.featured).slice(0, 8);
}

export default async function HomePage() {
    const featured = await getFeatured();

    return (
        <main className="max-w-6xl mx-auto p-4">
            <section className="rounded-xl border p-6 md:p-10">
                <h1 className="text-2xl md:text-4xl font-bold">Modern eCommerce</h1>
                <p className="mt-2 text-gray-600">Built with Next.js + MongoDB</p>
            </section>

            <section className="mt-8">
                <div className="flex items-end justify-between">
                    <h2 className="text-xl font-semibold">Featured Products</h2>
                    <a className="underline text-sm" href="/products">Browse all</a>
                </div>

                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {featured.map((p: any) => <ProductCard key={p._id} p={p} />)}
                </div>
            </section>
        </main>
    );
}