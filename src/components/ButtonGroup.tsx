"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

interface ButtonGroupProps {
    btn1: string;
    btn2: string;
    btn3: string;
    btn4: string;
    hrefBtn1: string;
    hrefBtn2: string;
    hrefBtn3: string;
    hrefBtn4: string;
}

export default function ButtonGroup({
    btn1,
    btn2,
    btn3,
    btn4,
    hrefBtn1,
    hrefBtn2,
    hrefBtn3,
    hrefBtn4,
}: ButtonGroupProps) {
    return (
        <NavigationMenu.Root className="my-[55px]">
            <NavigationMenu.List className="flex flex-col md:flex-row">
                <NavigationMenu.Item className="mb-7 md:mb-0">
                    <Link
                        href={hrefBtn1}
                        className="
                            border-2 
                            border-solid 
                            border-green 
                            dark:border-gray700 
                            text-white 
                            dark:text-gray700
                            py-[15px] 
                            px-[35px]
                            hover:bg-green 
                            hover:text-gray700
                            dark:hover:bg-gray700
                            dark:hover:text-white
                            transition-all
                        "
                    >
                        {btn1}
                    </Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="mb-7 md:mb-0">
                    <Link
                        href={hrefBtn2}
                        className="
                            border-2
                            md:border-y-2
                            md:border-x-0
                            border-solid 
                            border-green 
                            dark:border-gray700 
                            text-white 
                            dark:text-gray700
                            py-[15px] 
                            px-[35px]
                            hover:bg-green 
                            hover:text-gray700
                            dark:hover:bg-gray700
                            dark:hover:text-white
                            transition-all
                        "
                    >
                        {btn2}
                    </Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="mb-7 md:mb-0">
                    <Link
                        href={hrefBtn3}
                        className="
                            border-2
                            md:border-y-2
                            md:border-l-2
                            md:border-r-0
                            border-solid 
                            border-green 
                            dark:border-gray700 
                            text-white 
                            dark:text-gray700
                            py-[15px] 
                            px-[35px]
                            hover:bg-green
                            hover:text-gray700
                            dark:hover:bg-gray700
                            dark:hover:text-white
                            transition-all
                        "
                    >
                        {btn3}
                    </Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <Link
                        href={hrefBtn4}
                        className="
                            border-2 
                            border-solid 
                            border-green 
                            dark:border-gray700 
                            text-white 
                            dark:text-gray700 
                            py-[15px] 
                            px-[35px]
                            hover:bg-green 
                            hover:text-gray700
                            dark:hover:bg-gray700
                            dark:hover:text-white
                            transition-all
                        "
                    >
                        {btn4}
                    </Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
}
