import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Product from "@/models/Product";

// GET /api/products — fetch all products (with optional search/category filter)
export async function GET(request: Request) {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    const filter: Record<string, any> = {};
    if (category) filter.category = category;
    if (search) filter.name = { $regex: search, $options: "i" };

    const products = await Product.find(filter).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, products });
}

// POST /api/products — create a new product (admin only)
export async function POST(request: Request) {
    await dbConnect();
    const body = await request.json();

    try {
        const product = await Product.create(body);
        return NextResponse.json({ success: true, product }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
