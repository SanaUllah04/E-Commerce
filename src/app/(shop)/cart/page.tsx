"use client";

import { useEffect } from "react";
import { useCart } from "@/store/cartStore";

export default function CartPage() {
    const { items, hydrate, remove, setQty } = useCart();

    useEffect(() => { hydrate(); }, [hydrate]);

    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    return (
        <main className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold">Cart</h1>

            {items.length === 0 ? (
                <p className="mt-4 text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="mt-6 space-y-4">
                    {items.map(i => (
                        <div key={i._id} className="border rounded-lg p-3 flex gap-3 items-center">
                            <img src={i.image} alt={i.name} className="w-20 h-20 object-cover rounded border" />
                            <div className="flex-1">
                                <div className="font-semibold">{i.name}</div>
                                <div className="text-sm text-gray-600">${i.price}</div>
                            </div>

                            <input
                                type="number"
                                min={1}
                                value={i.qty}
                                onChange={(e) => setQty(i._id, Math.max(1, Number(e.target.value)))}
                                className="border rounded w-20 px-2 py-1"
                            />
                            <button onClick={() => remove(i._id)} className="underline text-sm">Remove</button>
                        </div>
                    ))}

                    <div className="flex items-center justify-between border-t pt-4">
                        <span className="font-semibold">Total</span>
                        <span className="text-xl font-bold">${total.toFixed(2)}</span>
                    </div>
                </div>
            )}
        </main>
    );
}