import { router, Link, usePage } from "@inertiajs/react";
import { isMobile } from "react-device-detect";
import ShopLayout from "@/Layouts/ShopLayout";
import { formatter } from "@/Helpers/Helper";
import CartSummaryItem from "@/Components/CartSummaryItem";
import { useMemo, useState } from "react";

export default function Cart({}) {
    const {
        cart,
        constants: { tax },
    } = usePage().props;

    const [checkoutText, setCheckoutText] = useState('Checkout');

    const [itemTotals, setItemTotals] = useState(
        cart.map((item) => {
            return {
                product_id: item.id,
                quantity: item.quantity,
                price: item.price,
            };
        })
    );

    const subTotal = useMemo(() => {
        return itemTotals.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
    }, [cart, itemTotals]);

    const qst = subTotal * tax.qst;
    const gst = subTotal * tax.gst;
    const total = subTotal * (1 + (tax.qst + tax.gst));

    const quantityUpdated = (id, price, quantity) => {
        const newTotals = itemTotals.map((item) => {
            if (item.product_id === id) {
                return { ...item, quantity: quantity };
            }

            return item;
        });

        setItemTotals(newTotals);

        router.post("/update", {
            product_id: id,
            quantity: quantity,
        });
    };

    const removeItem = (id) => {
        setItemTotals((current) =>
            current.filter((item) => item.product_id !== id)
        );

        router.post(
            "/remove",
            {
                product_id: id,
            },
            {
                preserveScroll: true,
            }
        );
    };

    if (cart.length === 0) {
        if (isMobile) {
            return (
                <ShopLayout>
                    <div className="pt-6">
                        Your cart is empty. Go back{" "}
                        {
                            <Link href={route("shop")} className="underline">
                                to the shop.
                            </Link>
                        }
                    </div>
                </ShopLayout>
            );
        }

        return (
            <ShopLayout>
                Your cart is empty. Go back{" "}
                {
                    <Link href={route("shop")} className="underline">
                        to the shop.
                    </Link>
                }
            </ShopLayout>
        );
    }

    return (
        <ShopLayout>
            <div className="py-6">
                <h2>Shopping Cart</h2>

                <div>
                    {cart.map((item) => {
                        return (
                            <CartSummaryItem
                                key={item.id}
                                item={item}
                                quantityHandler={quantityUpdated}
                                removeHandler={removeItem}
                            />
                        );
                    })}
                </div>

                <div className="px-4 sm:px-6">
                    <div className="flex justify-between text-base text-sm text-gray-500">
                        <p>Subtotal</p>
                        <p>{formatter().format(subTotal)}</p>
                    </div>
                    <div className="flex justify-between text-base text-sm text-gray-500">
                        <p>QST</p>
                        <p>{formatter().format(qst)}</p>
                    </div>
                    <div className="flex justify-between text-base text-sm text-gray-500">
                        <p>GST</p>
                        <p>{formatter().format(gst)}</p>
                    </div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>{formatter().format(total)}</p>
                    </div>
                    <div className="mt-6">
                        <a
                            href="#"
                            onClick={() => setCheckoutText('Checkout not implemented...')}
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                            {checkoutText}
                        </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or{" "}
                            <Link
                                href={route("shop")}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Back to shop <span aria-hidden="true"> →</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </ShopLayout>
    );
}
