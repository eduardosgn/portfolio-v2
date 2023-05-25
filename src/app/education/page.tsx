import Divider from "@/components/Divider";
import { MdOutlineSchool } from "react-icons/md";

export default function Education() {
    return (
        <main>
            <section className="flex items-center justify-between mt-10 border-b-2 pb-4 border-white dark:border-gray700">
                <h1 className="text-white dark:text-gray700 font-bold text-[35px]">
                    Formação acadêmica
                </h1>

                <MdOutlineSchool
                    size={44}
                    className="text-white dark:text-gray700 transition-all hidden md:block"
                />
            </section>

            <section className="mt-10">
                <div className="border-2 border-white dark:border-gray700 p-2 md:p-7 rounded-sm">
                    <div className="text-green dark:text-gray700 text-4xl font-bold mb-6">
                        Universidade Estácio de Sá
                    </div>

                    <Divider />

                    <div className="text-white dark:text-gray700 text-xl">
                        Tecnólogo em Desenvolvimento Fullstack
                    </div>
                </div>
            </section>
        </main>
    );
}
