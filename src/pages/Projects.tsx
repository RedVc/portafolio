import ProjectCard from "../components/projects/ProjectCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();
    
    const projects = [
        {
            title: "fz.title",
            desc: "fz.desc",
            links: [
                {
                    link: "https://www.facturazen.com/",
                    desc: ""
                }
            ]
        },
        {
            title: "fzm.title",
            desc: "fzm.desc",
            links: [
                {
                    link: "https://play.google.com/store/apps/details?id=com.centaurosolutions.facturazenapp&pcampaignid=web_share",
                    desc: "Google Play"
                },
                {
                    link: "https://apps.apple.com/cr/app/factura-zen/id1500595487?l=en-GB",
                    desc: "App Store"
                },
            ]
        },
        
    ];
    const personalProjects = [
        {
            title: "gh.title",
            desc: "gh.desc",
            links: [
                {
                    link: "https://github.com/RedVc",
                    desc: ""
                },
            ]
        },
        {
            title: "Hunger Games (2021)",
            desc: "hg.desc",
            links: [
                {
                    link: "https://hungergamesbyred.web.app/assets/games/generos.html",
                    desc: ""
                },
            ]
        },
    ];

    return(
        <div>
            <div>
                <p className="text-xl lg:text-3xl text-cyan-500 font-semibold mb-2">
                    {t("project.title")}
                </p>
                {projects.map((pro) => (
                    <ProjectCard
                        key={pro.title}
                        title={t(pro.title)}
                        desc={t(pro.desc)}
                        links={pro.links}
                    />
                ))}
            </div>
            <div>
                <p className="text-xl lg:text-3xl text-cyan-500 font-semibold mb-2">
                    {t("project.personalTitle")}
                </p>
                {personalProjects.map((pro) => (
                    <ProjectCard
                        key={pro.title}
                        title={t(pro.title)}
                        desc={t(pro.desc)}
                        links={pro.links}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;