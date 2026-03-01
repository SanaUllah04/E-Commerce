import { ProductCard } from "@/components/ProductCard";

export default async function ProductsPage({ searchParams }: any) {
    const q = searchParams?.q ? `q=${encodeURIComponent(searchParams.q)}` : "";
    const url = `${process.env.NEXTAUTH_URL}/api/products${q ? `?${q}` : ""}`;

    const res = await fetch(url, { cache: "no-store" });
    const products = await res.json();

    return (
        <main className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <h1 className="text-2xl font-bold">Products</h1>

                <form className="flex gap-2" action="/products" method="get">
                    <input
                        name="q"
                        defaultValue={searchParams?.q ?? ""}
                        placeholder="Search name or category..."
                        className="border rounded px-3 py-2 w-full md:w-80"
                    />
                    <button className="border rounded px-4">Search</button>
                </form>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((p: any) => <ProductCard key={p._id} p={p} />)}
            </div>
        </main>
    );
}