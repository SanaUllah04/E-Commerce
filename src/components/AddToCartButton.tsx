"use client";
import { useCart } from "@/store/cartStore";

export function AddToCartButton({ product }: { product: any }) {
    const add = useCart(s => s.add);

    return (
        <button
            onClick={() => add({ _id: product._id, name: product.name, price: product.price, image: product.image })}
            className="border rounded px-4 py-2 w-full md:w-auto"
        >
            Add to cart
        </button>
    );
}