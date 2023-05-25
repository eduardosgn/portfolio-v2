import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdCalendarMonth } from "react-icons/md";

interface JobExperienceProps {
    logoImg: StaticImageData;
    altImg: string;
    companyName: string;
    companyNameSmall: string;
    comanyWebpage: string;
    jobPosition: string;
    jobDescription: string;
    jobDate: string;
}

interface imageStylesProps {
    marginTop: string;
    borderRadius: string;
    objectFit: string;
    width: string;
    height: string;
}

const imageStyles: imageStylesProps = {
    marginTop: "0.25rem",
    borderRadius: "0.125rem",
    objectFit: "cover",
    width: "100%",
    height: "100%",
};

export default function JobExperience({
    logoImg,
    altImg,
    companyName,
    companyNameSmall,
    comanyWebpage,
    jobPosition,
    jobDescription,
    jobDate,
}: JobExperienceProps) {
    return (
        <section className="mt-4 mb-5">
            <div className="flex flex-col xl:flex-row items-start justify-start">
                <div className="w-[60px] h-[60px] shrink-0">
                    <Image src={logoImg} alt={altImg} style={imageStyles} />
                </div>

                <div className="pl-0 xl:pl-4">
                    <h3 className="text-white dark:text-gray700 text-[20px] font-bold mb-[10px] mt-2 md:mt-0">
                        {companyName}
                    </h3>

                    <span className="text-gray700 text-md border-2 border-green dark:border-gray7 rounded-sm py-1 px-3 bg-green">
                        {jobPosition}
                    </span>

                    <p className="text-white dark:text-gray700 mt-4 leading-relaxed">
                        {jobDescription}
                    </p>

                    <div className="mt-4 flex flex-col md:flex-row items-start md:items-center">
                        <MdCalendarMonth
                            size={20}
                            className="text-green dark:text-gray700 mr-1"
                        />

                        <p className="text-white dark:text-gray700">
                            {jobDate}
                        </p>

                        <span className="px-1 text-white dark:text-gray700 hidden md:block">
                            |
                        </span>

                        <div className="flex flex-col items-start justify-start group">
                            <Link
                                href={comanyWebpage}
                                target="_blank"
                                className="text-green dark:text-gray700"
                            >
                                Visitar homepage {companyNameSmall}
                            </Link>
                            <div className="w-0 h-1 transition-all group-hover:w-full border-b-2 border-green"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
