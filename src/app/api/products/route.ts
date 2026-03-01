import { NextResponse } from "next/server";
import { dbConnect } from "@/app/lib/db";
import { Product } from "@/models/Product";

export async function GET(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.trim();
    const category = searchParams.get("category")?.trim();

    const filter: any = {};
    if (q) filter.name = { $regex: q, $options: "i" };
    if (category) filter.category = { $regex: `^${category}$`, $options: "i" };

    const products = await Product.find(filter).sort({ createdAt: -1 });
    return NextResponse.json(products);
}

export async function POST(req: Request) {
    await dbConnect();
    const body = await req.json();
    const created = await Product.create(body);
    return NextResponse.json(created, { status: 201 });
}