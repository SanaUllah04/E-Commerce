import { NextResponse } from "next/server";
import { dbConnect } from "@/app/lib/db";
import { Product } from "@/models/Product";

export async function GET(_: Request, { params }: { params: { id: string } }) {
    await dbConnect();
    const product = await Product.findById(params.id);
    if (!product) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json(product);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    await dbConnect();
    const body = await req.json();
    const updated = await Product.findByIdAndUpdate(params.id, body, { new: true });
    if (!updated) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    await dbConnect();
    const deleted = await Product.findByIdAndDelete(params.id);
    if (!deleted) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json({ ok: true });
}