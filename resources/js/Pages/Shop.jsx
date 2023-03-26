import { isMobile } from "react-device-detect";
import ShopLayout from "@/Layouts/ShopLayout";
import ProductCard from "@/Components/ProductCard";
import CartCount from "@/Components/CartCount";
import Pagination from "@/Pages/Partials/Pagination";
import PaginationMobile from "@/Pages/Partials/PaginationMobile";

export default function Shop({ products }) {
    return (
        <ShopLayout>
            <div className="mx-auto max-w-2xl lg:py-6 px-4 lg:max-w-7xl lg:px-8">
                <span className="invisible lg:visible flow-root mb-6">
                    <span className="float-right">
                        <CartCount />
                    </span>
                </span>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.data.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        );
                    })}
                </div>

                {isMobile ? (
                    <PaginationMobile links={products.links} />
                ) : (
                    <Pagination links={products.links} />
                )}
            </div>
        </ShopLayout>
    );
}
