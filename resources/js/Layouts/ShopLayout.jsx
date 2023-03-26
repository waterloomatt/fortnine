import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { isMobile } from "react-device-detect";
import CartCount from "@/Components/CartCount";
import { Head } from "@inertiajs/react";

export default function ShopLayout({ children }) {
    if (isMobile) {
        return (
            <>
                <Head>
                    <title>FortNine Demo</title>
                    <meta
                        name="description"
                        content="A demo application for FortNine, by Matt Skelton"
                    />
                </Head>
                <div className="min-h-screen mt-16">
                    <div className="px-8 py-2 flow-root bg-gray-100 fixed z-50 top-0 left-0 right-0">
                        <div className="flow-left">
                            <Link href={route("shop")}>
                                <ApplicationLogo className="w-10 h-10 float-left" />
                            </Link>
                        </div>

                        <div className="float-right py-2 mr-2">
                            <CartCount />
                        </div>
                    </div>

                    <div className="px-6 rounded-lg mb-4">{children}</div>
                </div>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>FortNine Demo</title>
                <meta
                    name="description"
                    content="A demo application for FortNine, by Matt Skelton"
                />
            </Head>

            <div className="min-h-screen sm:w-full lg:flex flex-col items-center pt-6 bg-gray-100">
                {/* large */}
                <div className="invisible lg:visible">
                    <Link href={route("shop")}>
                        <ApplicationLogo className="w-10 h-10 sm:w-20 sm:h-20" />
                    </Link>
                </div>

                {/* medium */}
                <div className="invisible sm:visible lg:invisible mx-0 px-6 py-6 flow-root mx-6 bg-gray-100 fixed z-50 top-0 left-0 right-0">
                    <div className="flow-left">
                        <Link href={route("shop")}>
                            <ApplicationLogo className="w-10 h-10 float-left" />
                        </Link>
                    </div>

                    <div className="float-right py-2">
                        <CartCount />
                    </div>
                </div>

                {/* small */}
                <div className="visible sm:invisible mx-0 px-6 py-6 flow-root mx-6 bg-gray-100 fixed z-50 top-0 left-0 right-0">
                    <div className="flow-left">
                        <Link href={route("shop")}>
                            <ApplicationLogo className="w-10 h-10 float-left" />
                        </Link>
                    </div>

                    <div className="float-right py-2">
                        <CartCount />
                    </div>
                </div>

                <div className="sm:mx-6 px-6 mt-6 py-6 bg-white md:shadow-md overflow-hidden sm:rounded-lg mb-4 overflow-visible">
                    {children}
                </div>
            </div>
        </>
    );
}
