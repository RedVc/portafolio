import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";

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

            <p className="text-gray-300">
                {desc}
            </p>

            <div className="flex justify-center">
                {links?.map((linkO) => 
                    <a href={linkO.link} target="_blank" className="text-gray-400 hover:text-cyan-400 transition p-1 flex flex-row items-center">
                        { linkO.desc ? linkO.desc : t("project.visite") }
                        <ExternalLink size={16} className="pl-1"/>
                    </a>
                )} 
            </div>
        </div>
    );
}

export default ProjectCard;