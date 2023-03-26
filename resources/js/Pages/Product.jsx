import GuestLayout from "@/Layouts/GuestLayout";
import ProductDetails from "@/Components/ProductDetails";
import CartCount from "@/Components/CartCount";

export default function Shop({ product }) {
    return (
        <GuestLayout>
            <span className="invisible lg:visible lg:flow-root">
                <span className="float-right">
                    <CartCount />
                </span>
            </span>
            <ProductDetails product={product} />
        </GuestLayout>
    );
}
