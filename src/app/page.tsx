import Divider from "@/components/Divider";
import { MdOutlineDesignServices } from "react-icons/md";
import ButtonGroup from "@/components/ButtonGroup";

export default function Home() {
    return (
        <main className="flex flex-col sm:justify-start sm:mt-6 xl:mt-0 xl:justify-center h-full">
            <div className="flex items-end justify-between">
                <p className="text-white dark:text-gray700 text-lg transition-all">
                    Designer de interfaces / Desenvolvedor Front-end
                </p>

                <MdOutlineDesignServices
                    size={40}
                    className="text-white dark:text-gray700 transition-all"
                />
            </div>

            <Divider />

            <h1 className="text-white dark:text-gray700 transition-all sm:text-5xl sm:font-bold md:font-normal md:text-6xl xl:text-8xl">
                Eduardo Nascimento
            </h1>

            <ButtonGroup />
        </main>
    );
}
