import { useTranslation } from "react-i18next";

interface Link {
    link: string;
    desc: string;
}

interface ProjectCardProps{
    title: string,
    desc: string,
    links: Link[] | undefined,
}

const ProjectCard = ( { title, desc, links }: ProjectCardProps ) => {

    const { t } = useTranslation();
    return(
        <div className="pb-2">
            <p className="font-semibold text-lg md:text-2xl">
                {title}
            </p>

            <p className="opacity-70">
                {desc}
            </p>

            { 
                links ? 
                    links.map((linkO) => 
                        <a href={linkO.link} target="_blank" className="hover:text-gray-50 opacity-50 p-1">
                            { linkO.desc ? linkO.desc : t("project.visite") }
                        </a>
                    ) :
                ""
            } 
        </div>
    );
}

export default ProjectCard;