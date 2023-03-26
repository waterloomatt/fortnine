import { Link } from "@inertiajs/react";

export default function PaginationMobile({ links }) {
    const directionLinks = [links[0], links[links.length - 1]];

    const renderLink = (index, link) => {
        if (link.url === null) {
            return (
                <div
                    key={index}
                    className="mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400"
                >
                    {link.label}
                </div>
            );
        }

        return (
            <Link
                key={index}
                href={link.url}
                className="mr-1 mb-1 px-4 py-3 text-sm border rounded bg-white hover:bg-gray-100 focus:border-indigo-500 focus:text-indigo-500 focus:bg-purple-200"
            >
                {link.label}
            </Link>
        );
    };
    return (
        <div className="mt-6 -mb-1 flex flex-wrap">
            {directionLinks.map((link, index) => renderLink(index, link))}
        </div>
    );
}
