// app/layout.tsx

import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: { description: string; title: string; authors: string[] } = {
    title: "My test app",
    description: "Created by Surkov Kostiantyn",
    authors: ["Surkov Kostiantyn"]
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex min-h-screen flex-col items-center justify-start p-16">
                    {children}
                </main>
            </body>
        </html>
    );
}
