"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

interface Product {
    _id: string;
    name: string;
    image: string;
    price: number;
}

interface Props {
    product: Product;
    disabled?: boolean;
}

export default function AddToCartButton({ product, disabled }: Props) {
    const addItem = useCartStore((s) => s.addItem);
    const [added, setAdded] = useState(false);

    const handleClick = () => {
        addItem({ _id: product._id, name: product.name, image: product.image, price: product.price });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 ${disabled
                    ? "bg-gray-300 cursor-not-allowed"
                    : added
                        ? "bg-green-500 scale-[0.98]"
                        : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98]"
                }`}
        >
            {disabled ? "Out of Stock" : added ? "✓ Added to Cart!" : "Add to Cart"}
        </button>
    );
}
