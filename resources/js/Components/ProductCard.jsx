import { Link } from "@inertiajs/react";

export default function ProductCard({ product }) {
    return (
        <Link href={`/product/${product.id}`} key={product.id}>
            <div className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.price}
                </p>
            </div>
        </Link>
    );
}
