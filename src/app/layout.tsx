import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Deal Rooms",
    description: "Deal rooms trial screen",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
