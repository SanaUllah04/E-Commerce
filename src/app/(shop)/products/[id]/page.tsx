import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import { formatPrice } from "@/lib/utils";

async function getProduct(id: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
        { cache: "no-store" }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.product ?? null;
}

interface Props {
    params: { id: string };
}

export default async function ProductDetailPage({ params }: Props) {
    const product = await getProduct(params.id);
    if (!product) return notFound();

    return (
        <main className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Product Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center gap-4">
                    <span className="text-sm text-indigo-600 font-semibold uppercase tracking-wider">
                        {product.category}
                    </span>
                    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    <p className="text-2xl font-bold text-gray-900">{formatPrice(product.price)}</p>
                    <p className="text-sm text-gray-500">
                        {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                    </p>

                    <AddToCartButton product={product} disabled={product.stock === 0} />
                </div>
            </div>
        </main>
    );
}
