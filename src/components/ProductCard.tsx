import Link from "next/link";

export function ProductCard({ p }: { p: any }) {
    return (
        <div className="border rounded-lg overflow-hidden hover:shadow-sm transition">
            <img src={p.image} alt={p.name} className="w-full aspect-square object-cover" />
            <div className="p-3">
                <h3 className="font-semibold line-clamp-1">{p.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-1">{p.category}</p>
                <div className="mt-2 flex items-center justify-between">
                    <span className="font-bold">${p.price}</span>
                    <Link className="text-sm underline" href={`/products/${p._id}`}>
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}