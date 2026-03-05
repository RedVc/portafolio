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
        <div className="pb-3 flex items-center flex-col">
            <p className="text-base lg:text-xl font-semibold">
                {title}
            </p>

            <p className="text-gray-300 max-w-80 whitespace-pre-line">
                {desc}
            </p>

            <div className="flex justify-center gap-1">
                {links?.map((linkO) => 
                    <a href={linkO.link} target="_blank" className="text-gray-400 hover:text-cyan-400 transition m-1 flex flex-row items-center">
                        { linkO.desc ? linkO.desc : t("project.visite") }
                        <ExternalLink size={16} className="pl-1"/>
                    </a>
                )} 
            </div>
        </div>
    );
}

export default ProjectCard;