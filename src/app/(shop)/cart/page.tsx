"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
    const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore();

    if (items.length === 0) {
        return (
            <main className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
                <p className="text-gray-500 mb-8">Start shopping and add items to your cart.</p>
                <Link
                    href="/products"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    Browse Products
                </Link>
            </main>
        );
    }

    return (
        <main className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {items.map((item) => (
                        <div
                            key={item._id}
                            className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl"
                        >
                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                                <p className="text-indigo-600 font-bold">{formatPrice(item.price)}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                >
                                    −
                                </button>
                                <span className="w-8 text-center font-medium">{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={() => removeItem(item._id)}
                                className="text-red-500 hover:text-red-700 text-sm ml-2"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-2xl p-6 h-fit">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2 text-gray-600">
                        <span>Subtotal</span>
                        <span>{formatPrice(totalPrice())}</span>
                    </div>
                    <div className="flex justify-between mb-2 text-gray-600">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between text-lg font-bold mb-6">
                        <span>Total</span>
                        <span>{formatPrice(totalPrice())}</span>
                    </div>
                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                        Proceed to Checkout
                    </button>
                    <button
                        onClick={clearCart}
                        className="w-full mt-3 text-red-500 hover:text-red-700 text-sm"
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </main>
    );
}
