"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";

interface Product {
    _id: string;
    name: string;
    image: string;
    price: number;
    category: string;
    slug: string;
}

export default function ProductCard({ product }: { product: Product }) {
    const addItem = useCartStore((s) => s.addItem);

    return (
        <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            {/* Image */}
            <Link href={`/products/${product._id}`} className="block relative aspect-square overflow-hidden bg-gray-50">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </Link>

            {/* Info */}
            <div className="p-4">
                <span className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">
                    {product.category}
                </span>
                <Link href={`/products/${product._id}`}>
                    <h3 className="mt-1 font-semibold text-gray-900 truncate hover:text-indigo-600 transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                    <button
                        onClick={() =>
                            addItem({ _id: product._id, name: product.name, image: product.image, price: product.price })
                        }
                        className="bg-indigo-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
