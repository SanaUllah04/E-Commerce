import Link from "next/link";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Welcome to <span className="text-indigo-600">ShopNow</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-md mb-10">
                Discover premium products at unbeatable prices. Shop the latest trends across electronics, fashion, and more.
            </p>
            <div className="flex gap-4">
                <Link
                    href="/products"
                    className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                >
                    Shop Now
                </Link>
                <Link
                    href="/admin"
                    className="border border-gray-200 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                    Admin
                </Link>
            </div>
        </main>
    );
}
