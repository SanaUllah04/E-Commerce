import { AddToCartButton } from "@/components/AddToCartButton";

async function getProduct(id: string) {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);
    if (!product) return <div className="p-6">Not found</div>;

    return (
        <main className="max-w-5xl mx-auto p-4 grid md:grid-cols-2 gap-6">
            <img src={product.image} alt={product.name} className="w-full rounded-lg border aspect-square object-cover" />

            <div>
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="mt-1 text-gray-600">{product.category}</p>
                <p className="mt-4">{product.description}</p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold">${product.price}</span>
                    <span className="text-sm text-gray-600">Stock: {product.stock}</span>
                </div>

                <div className="mt-6">
                    <AddToCartButton product={product} />
                </div>
            </div>
        </main>
    );
}