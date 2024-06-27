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
                    className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

export default Navigation;
