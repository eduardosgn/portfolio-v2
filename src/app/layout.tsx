"use client";
import "./globals.scss";
import { Inter } from "next/font/google";
import { MdChevronLeft } from "react-icons/md";
import Link from "next/link";
import ColorModeButton from "@/components/ColorModeButton";
import { usePathname } from "next/navigation";

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
    const pathname = usePathname();

    return (
        <html lang="pt-BR" className="dark">
            <body
                className={`${inter.className} bg-gray700 dark:bg-white antialiased`}
            >
                <div
                    className={`container border-l-2 border-white dark:border-gray700 border-solid p-8 ${
                        pathname !== "/" ? "sticky top-0" : "h-screen"
                    }`}
                >
                    <div
                        className={`w-full flex z-50 ${
                            pathname !== "/" ? "justify-between" : "justify-end"
                        }`}
                    >
                        {pathname !== "/" && (
                            <Link
                                href="/"
                                className="
                                text-white 
                                dark:text-gray700
                                py-1 
                                pr-3
                                pl-1 
                                transition-all
                                flex
                                items-center
                                justify-center
                                group
                                "
                            >
                                <div className="transition-all invisible w-[2px] h-0 group-hover:visible group-hover:h-2 bg-white"></div>
                                <MdChevronLeft
                                    size={20}
                                    className="transition-all group-hover:-translate-x-[3px]"
                                />
                                Voltar
                            </Link>
                        )}

                        <ColorModeButton />
                    </div>

                    {children}

                    <div className="absolute top-4 right-4 ellipse1 -z-50 dark:opacity-30 opacity-10"></div>

                    <div className="absolute bottom-32 left-32 ellipse2 -z-50 dark:opacity-30 opacity-10"></div>
                </div>
            </body>
        </html>
    );
}
