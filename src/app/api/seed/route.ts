import { NextResponse } from "next/server";
import { dbConnect } from "@/app/lib/db";
import { Product } from "@/models/Product";

export async function POST() {
    await dbConnect();

    const sample = [
        {
            name: "Wireless Headphones",
            price: 59.99,
            image: "https://picsum.photos/seed/headphones/600/600",
            description: "Comfortable wireless headphones with clear sound.",
            category: "Electronics",
            stock: 25,
            featured: true,
        },
        {
            name: "Running Shoes",
            price: 89.0,
            image: "https://picsum.photos/seed/shoes/600/600",
            description: "Lightweight running shoes for everyday training.",
            category: "Fashion",
            stock: 15,
            featured: true,
        },
        {
            name: "Coffee Mug",
            price: 12.5,
            image: "https://picsum.photos/seed/mug/600/600",
            description: "Ceramic mug, perfect for tea or coffee.",
            category: "Home",
            stock: 60,
            featured: false,
        },
    ];

    await Product.deleteMany({});
    await Product.insertMany(sample);

    return NextResponse.json({ ok: true, inserted: sample.length });
}