// app/components/Navigation.tsx

import Link from "next/link";

interface NavigationProps {
    links: {
        href: string; //
        label: string;
    }[];
}

const Navigation = ({ links }: NavigationProps) => {
    return (
        <div className="w-full max-w-5xl flex items-center gap-4 font-mono text-sm lg:flex">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="
                        rounded-lg
                        px-5 py-4
                        text-gray-500
                        hover:text-black
                        hover:dark:text-white
                        border
                        border-dashed
                        border-white
                        dark:border-black
                        hover:border-black
                        hover:dark:border-white
                        duration-100
                        "
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

export default Navigation;
