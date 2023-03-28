import ShopLayout from "@/Layouts/ShopLayout";
import ProductDetails from "@/Components/ProductDetails";
import CartCount from "@/Components/CartCount";

export default function Product({ product }) {
    return (
        <ShopLayout>
            <span className="invisible lg:visible lg:flow-root">
                <span className="float-right">
                    <CartCount />
                </span>
            </span>
            <ProductDetails product={product} />
        </ShopLayout>
    );
}
