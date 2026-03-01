import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { dbConnect } from "@/app/lib/db";
import { Order } from "@/models/Order";

// GET /api/cart — get current user's latest cart/orders
export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const orders = await Order.find({ user: (session.user as any).id })
        .populate("items.product", "name image price")
        .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, orders });
}

// POST /api/cart — place a new order
export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();

    try {
        const order = await Order.create({
            user: (session.user as any).id,
            ...body,
        });
        return NextResponse.json({ success: true, order }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
