import { NextResponse } from "next/server";
import { dbConnect } from "@/app/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST() {
    await dbConnect();
    const email = process.env.ADMIN_EMAIL!;
    const password = process.env.ADMIN_PASSWORD!;
    const exists = await User.findOne({ email });
    if (exists) return NextResponse.json({ ok: true, message: "Admin already exists" });

    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({ email, passwordHash, role: "admin" });

    return NextResponse.json({ ok: true, message: "Admin created", email });
}