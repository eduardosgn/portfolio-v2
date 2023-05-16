"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function ButtonGroup() {
    return (
        <NavigationMenu.Root className="my-[55px]">
            <NavigationMenu.List className="flex items-center">
                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        href="https://github.com/radix-ui"
                        target="_blank"
                        className="
                            border-2 
                            border-solid 
                            border-white 
                            dark:border-gray700 
                            text-white 
                            dark:text-gray700
                            py-[15px] 
                            px-[35px]
                            hover:bg-white 
                            hover:text-gray700
                            dark:hover:bg-gray700
                            dark:hover:text-white
                            transition-all
                        "
                    >
                        Sobre
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        href="https://github.com/radix-ui"
                        target="_blank"
                        className="
                            border-y-2 
                            border-solid 
                            border-white 
                            dark:border-gray700 
                            text-white 
                            dark:text-gray700
                            py-[15px] 
                            px-[35px]
                            hover:bg-white 
                            hover:text-gray700
                            dark:hover:bg-gray700
                            dark:hover:text-white
                            transition-all
                        "
                    >
                        Trabalhos
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        href="https://github.com/radix-ui"
                        target="_blank"
                        className="
                            border-2 
                            border-solid 
                            border-white 
                            dark:border-gray700 
                            text-white 
                            dark:text-gray700 
                            py-[15px] 
                            px-[35px]
                            hover:bg-white 
                            hover:text-gray700
                            dark:hover:bg-gray700
                            dark:hover:text-white
                            transition-all
                        "
                    >
                        Contato
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
}
