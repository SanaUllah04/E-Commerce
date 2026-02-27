import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Product from "@/models/Product";

// GET /api/products/[id]
export async function GET(_: Request, { params }: { params: { id: string } }) {
    await dbConnect();
    const product = await Product.findById(params.id);
    if (!product) {
        return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, product });
}

// PUT /api/products/[id]
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    await dbConnect();
    const body = await request.json();
    const product = await Product.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
    if (!product) {
        return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, product });
}

// DELETE /api/products/[id]
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    await dbConnect();
    const product = await Product.findByIdAndDelete(params.id);
    if (!product) {
        return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Product deleted" });
}
