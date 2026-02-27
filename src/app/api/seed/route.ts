import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Product from "@/models/Product";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const sampleProducts = [
    {
        name: "Wireless Noise-Cancelling Headphones",
        description: "Premium over-ear headphones with active noise cancellation and 30-hour battery life.",
        price: 299.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        stock: 50,
        slug: "wireless-noise-cancelling-headphones",
    },
    {
        name: "Running Sneakers",
        description: "Lightweight and breathable sneakers designed for long-distance running.",
        price: 129.99,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        stock: 120,
        slug: "running-sneakers",
    },
    {
        name: "Minimalist Leather Watch",
        description: "Elegant leather-strap watch with a clean minimalist dial.",
        price: 199.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        stock: 35,
        slug: "minimalist-leather-watch",
    },
    {
        name: "Wireless Mechanical Keyboard",
        description: "Compact 75% mechanical keyboard with hot-swappable switches and RGB backlight.",
        price: 149.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        stock: 60,
        slug: "wireless-mechanical-keyboard",
    },
    {
        name: "Insulated Travel Bottle",
        description: "Double-walled stainless steel bottle that keeps drinks cold for 24h or hot for 12h.",
        price: 39.99,
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
        stock: 200,
        slug: "insulated-travel-bottle",
    },
];

export async function GET() {
    await dbConnect();

    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});

    // Seed products
    await Product.insertMany(sampleProducts);

    // Seed admin user
    const hashedPassword = await bcrypt.hash("admin123", 12);
    await User.create({
        name: "Admin",
        email: "admin@shop.com",
        password: hashedPassword,
        role: "admin",
    });

    // Seed regular user
    const userPassword = await bcrypt.hash("user123", 12);
    await User.create({
        name: "John Doe",
        email: "john@example.com",
        password: userPassword,
        role: "user",
    });

    return NextResponse.json({
        success: true,
        message: "Database seeded successfully!",
        seeded: { products: sampleProducts.length, users: 2 },
    });
}
