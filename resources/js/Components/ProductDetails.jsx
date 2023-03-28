import AddToCartForm from "@/Components/AddToCartForm";
import { Link } from "@inertiajs/react";

export default function ProductDetails({ product }) {
    return (
        <div className="mt-12 flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:pr-4 lg:max-w-4xl">
            <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="object-cover object-center"
                    />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {product.name}
                    </h2>

                    <h3 id="information-heading" className="sr-only">
                        Product information
                    </h3>

                    <p className="text-2xl text-gray-900">${product.price}</p>

                    <div className="mt-10">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900">
                                Description
                            </h4>
                        </div>

                        {product.description}
                    </div>

                    <AddToCartForm product={product} />

                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            <Link
                                href={"/"}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Back to shop <span aria-hidden="true"> →</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
