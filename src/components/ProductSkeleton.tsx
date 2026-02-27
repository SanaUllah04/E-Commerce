export default function ProductSkeleton() {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
            <div className="aspect-square bg-gray-200" />
            <div className="p-4">
                <div className="h-3 bg-gray-200 rounded w-1/3 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
                <div className="flex justify-between items-center">
                    <div className="h-5 bg-gray-200 rounded w-1/4" />
                    <div className="h-7 bg-gray-200 rounded w-24" />
                </div>
            </div>
        </div>
    );
}
