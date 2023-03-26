import ShopLayout from "@/Layouts/ShopLayout";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Error({}) {
    const { status } = usePage().props;

    const renderError = (status) => {
        if (status === 404) {
            return (
                <div>
                    <p>Sorry, we can't find that page.</p>

                    <p className="mt-6">
                        <Link
                            href={route("shop")}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Continue shopping <span aria-hidden="true"> →</span>
                        </Link>
                    </p>
                </div>
            );
        }

        return (
            <div>
                <p>Sorry, something went wrong.</p>

                <p className="mt-6">
                    <Link
                        href={route("shop")}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Continue shopping <span aria-hidden="true"> →</span>
                    </Link>
                </p>
            </div>
        );
    };

    return (
        <ShopLayout>
            <div className="mx-auto max-w-2xl lg:py-6 px-4 lg:max-w-7xl lg:px-8">
                {renderError(status)}
            </div>
        </ShopLayout>
    );
}
