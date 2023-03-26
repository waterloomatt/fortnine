import { useState } from "react";
import { formatter } from "@/Helpers/Helper";
import { range } from "lodash";
import Select from "react-select";
import { usePage } from "@inertiajs/react";

export default function CartSummaryItem({
    item,
    quantityHandler,
    removeHandler,
}) {
    const {
        constants: { max_product_quantity },
    } = usePage().props;

    const [quantity, setQuantity] = useState(item.quantity);

    const handleQuantityChange = (e) => {
        setQuantity(+e.value);
        quantityHandler(item.id, item.price, +e.value);
    };

    const handleRemoveItem = () => {
        removeHandler(item.id);
    };

    const rangeMax = +max_product_quantity + 1;
    const options = range(1, rangeMax).map((quantity) => {
        return { value: quantity, label: quantity };
    });

    return (
        <>
            <div className="flex py-6 border-b mb-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <a href={route("product", [item.id])}>
                        <img
                            src={item.image_url}
                            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                            className="h-full w-full object-cover object-center"
                        />
                    </a>
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <a href={route("product", [item.id])}>
                                    {item.name}
                                </a>
                            </h3>
                            <p className="ml-4">
                                {formatter().format(item.price)}
                            </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Salmon</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <Select
                            defaultValue={options.find(
                                ({ value }) => value === quantity
                            )}
                            onChange={handleQuantityChange}
                            options={options}
                            isSearchable={false}
                            placeholder={"Quantity"}
                        />

                        <div className="flex">
                            <button
                                type="button"
                                onClick={handleRemoveItem}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
