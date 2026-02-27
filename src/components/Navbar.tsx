"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
    const totalItems = useCartStore((s) => s.totalItems);
    const { data: session } = useSession();
    const isAdmin = (session?.user as any)?.role === "admin";

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-extrabold text-indigo-600 tracking-tight">
                    ShopNow
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="/products" className="hover:text-indigo-600 transition-colors">
                        Products
                    </Link>
                    {isAdmin && (
                        <Link href="/admin" className="hover:text-indigo-600 transition-colors">
                            Admin
                        </Link>
                    )}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {/* Cart */}
                    <Link href="/cart" className="relative p-2 hover:text-indigo-600 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {totalItems() > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                                {totalItems()}
                            </span>
                        )}
                    </Link>

                    {/* Auth */}
                    {session ? (
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600 hidden sm:block">{session.user?.name}</span>
                            <button
                                onClick={() => signOut()}
                                className="text-sm text-red-500 hover:text-red-700 transition-colors"
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
