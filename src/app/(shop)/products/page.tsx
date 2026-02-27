import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import ProductSkeleton from "@/components/ProductSkeleton";

async function getProducts(search?: string, category?: string) {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category) params.set("category", category);

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?${params.toString()}`,
        { cache: "no-store" }
    );
    const data = await res.json();
    return data.products ?? [];
}

interface Props {
    searchParams: { search?: string; category?: string };
}

export default async function ProductsPage({ searchParams }: Props) {
    const products = await getProducts(searchParams.search, searchParams.category);

    return (
        <main className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8">All Products</h1>

            {products.length === 0 ? (
                <p className="text-gray-500 text-center py-20">No products found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product: any) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            )}
        </main>
    );
}
