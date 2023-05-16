import "./globals.scss";
import { Inter } from "next/font/google";
import ColorModeButton from "@/components/ColorModeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Eduardo Nascimento",
    description: "Portfólio pessoal",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className="dark">
            <body className={`${inter.className} bg-gray700 dark:bg-white`}>
                <div className="container border-l-2 border-white dark:border-gray700 border-solid p-8 h-screen">
                    <div className="w-full flex justify-end z-50">
                        <ColorModeButton />
                    </div>

                    {children}

                    <div className="absolute top-4 right-4 ellipse1 -z-50 dark:opacity-30 opacity-10 hover:opacity-20"></div>

                    <div className="absolute bottom-0 left-0 ellipse2 -z-50 dark:opacity-30 opacity-10 hover:opacity-20"></div>
                </div>
            </body>
        </html>
    );
}
