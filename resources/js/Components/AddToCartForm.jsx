import React, { useState, useMemo } from "react";
import { map } from "lodash";
import { router, usePage } from "@inertiajs/react";
import { range } from "lodash";
import ItemAddedModal from "@/Components/ItemAddedModal";

export default function AddToCartForm({ product }) {
    const {
        cart,
        constants: { max_product_quantity },
    } = usePage().props;

    const [quantity, setQuantity] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const cartItem = cart.find((item) => item.id === product.id);
    const limitReached = cartItem
        ? cartItem.quantity >= +max_product_quantity
        : false;

    const options = useMemo(() => {
        const rangeMax = +max_product_quantity + 1;
        const remaining = cartItem ? rangeMax - cartItem.quantity : rangeMax;

        return range(1, remaining).map((quantity) => {
            return { value: quantity, label: quantity };
        });
    }, [cart]);

    const addToCart = async () => {
        await router.post(
            "/cart",
            {
                product_id: product.id,
                quantity: quantity,
            },
            {
                preserveScroll: true,
                onFinish: (visit) => {
                    setIsOpen(true);
                    setQuantity(1);
                },
            }
        );
    };

    return (
        <div className="mt-10">
            <div>
                <ItemAddedModal
                    product={product}
                    isOpen={isOpen}
                    closeHandler={() => setIsOpen(false)}
                />

                {limitReached ? (
                    <div
                        className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 mt-10"
                        role="alert"
                    >
                        <svg
                            className="fill-current w-4 h-4 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                        </svg>
                        <p>You've reached the max items per product</p>
                    </div>
                ) : (
                    <div>
                        <select
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            key={`quantity_select__${quantity}`}
                            defaultValue={options.find(
                                ({ value }) => value === quantity
                            )}
                            onChange={(selected) => setQuantity(selected.value)}
                            placeholder={"Quantity"}
                        >
                            {map(options, (option) => {
                                return (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                );
                            })}
                        </select>

                        <button
                            type={"submit"}
                            onClick={addToCart}
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 py-3 px-8 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Add to cart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
