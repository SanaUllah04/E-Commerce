import Navbar from "@/components/Navbar";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">{children}</div>
            <footer className="border-t border-gray-100 bg-white py-8 mt-16 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} ShopNow. All rights reserved.
            </footer>
        </>
    );
}
