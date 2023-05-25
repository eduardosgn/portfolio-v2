import { MdOutlineContactPage, MdCardTravel } from "react-icons/md";
import edunextLogo from "@/assets/edunextlogo.jpg";
import nordtechLogo from "@/assets/nordtechlogo.jpg";
import influxLogo from "@/assets/influxlogo.jpg";
import fiepLogo from "@/assets/fieplogo.jpg";
import renaultLogo from "@/assets/renaultlogo.jpg";
import JobExperience from "@/components/JobExperience";

export default function About() {
    return (
        <main>
            <section className="flex items-center justify-between mt-10 border-b-2 pb-4 border-white dark:border-gray700">
                <h1 className="text-white dark:text-gray700 font-bold text-[35px]">
                    Sobre mim
                </h1>

                <MdOutlineContactPage
                    size={44}
                    className="text-white dark:text-gray700 transition-all hidden md:block"
                />
            </section>

            <section className="mt-4">
                <p className="text-white dark:text-gray700 leading-relaxed">
                    Olá! sou Eduardo Nascimento,{" "}
                    <strong>
                        UX/UI Designer e Desenvolvedor Front-end com 5 anos de
                        experiência em design digital.{" "}
                    </strong>
                    Formado em Design Gráfico pela Unicuritiba e{" "}
                    <strong>
                        atualmente cursando Desenvolvimento Fullstack na
                        Universidade Estácio de Sá,
                    </strong>{" "}
                    minha missão é criar soluções digitais que sejam eficientes,
                    atraentes e proporcionem uma ótima experiência para os
                    usuários. Com uma abordagem habilidosa e tranquila, sou
                    reconhecido por minha capacidade de trabalhar em equipe e
                    lidar com projetos complexos. Meu objetivo é sempre entregar
                    soluções de alta qualidade que atendam às necessidades do
                    projeto, garantindo que o design seja intuitivo e eficiente
                    para os usuários finais.
                </p>
            </section>

            <section className="flex items-center justify-between mt-4 border-b-2 pb-4 border-white dark:border-gray700">
                <h2 className="text-white dark:text-gray700 font-bold text-[35px]">
                    Experiências
                </h2>

                <MdCardTravel
                    size={44}
                    className="text-white dark:text-gray700 transition-all hidden md:block"
                />
            </section>

            <JobExperience
                logoImg={edunextLogo}
                altImg="edunext"
                companyName="edunext"
                companyNameSmall="edunext"
                comanyWebpage="https://edunext.com.br"
                jobPosition="UX/UI Designer e Dev. front-end"
                jobDescription="Criação e manutenção da plataforma fintech edunext, utilizando de ferramentas para desenvolvimento web como HTML, CSS (Sass), JavaScript (VueJS + Framework Quasar) e softwares para criação de layouts web como Figma e Adobe XD."
                jobDate="Agosto de 2020 - até o momento"
            />

            <JobExperience
                logoImg={nordtechLogo}
                altImg="Nordtech Máquinas e Motores"
                companyName="Nordtech Máquinas e Motores"
                companyNameSmall="Nordtech"
                comanyWebpage="https://www.nordtech.com.br/"
                jobPosition="Designer gráfico Jr."
                jobDescription="Desenvolvimento de materiais gráficos impressos e digitais para o setor de marketing. Criação de vídeos promocionais de produtos. Auxiliar na coordenação de eventos internos e externos da empresa."
                jobDate="Setembro de 2019 - Fevereiro de 2020"
            />

            <JobExperience
                logoImg={influxLogo}
                altImg="inFlux English School"
                companyName="inFlux English School"
                companyNameSmall="inFlux"
                comanyWebpage="http://www.influx.com.br/"
                jobPosition="Designer gráfico Jr."
                jobDescription="Criação de desenvolvimento de campanhas e de materiais gráficos impressos e digitais tanto para o marketing externo da empresa como para as unidades inFlux por todo o país."
                jobDate="Setembro de 2018 - Maio de 2019"
            />

            <JobExperience
                logoImg={fiepLogo}
                altImg="FIEP - Federação das Indústrias do Estado do Paraná"
                companyName="FIEP - Federação das Indústrias do Estado do Paraná"
                companyNameSmall="FIEP"
                comanyWebpage="https://www.fiepr.org.br/"
                jobPosition="Estagiário em design gráfico"
                jobDescription="Estágio no setor da Gerência de Marketing, auxiliando na criação e diagramação de peças gráficas digitais (mídias sociais e e-marketings) e impressos (banners, faixas, folders, flyers, etc) para eventos e campanhas do FIEP (Sesi, Senai, IEL e Faculdades da Indústria) do Paraná."
                jobDate="Março de 2017 - Junho de 2018"
            />

            <JobExperience
                logoImg={renaultLogo}
                altImg="Renault do Brasil"
                companyName="Renault do Brasil"
                companyNameSmall="Renault"
                comanyWebpage="https://www.renault.com.br/"
                jobPosition="Aprendiz técnico"
                jobDescription="Auxiliar técnico no setor da carroceria dos carros de passeio Renault."
                jobDate="Outubro de 2015 - Janeiro de 2017"
            />
        </main>
    );
}
