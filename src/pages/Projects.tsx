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
            title: "asdasd",
            desc: "asdasdasd",
            links: [
                {
                    link: "asdasdasd",
                    desc: "Google Play"
                },
                {
                    link: "https://apps.apple.com/cr/app/factura-zen/id1500595487?l=en-GB",
                    desc: "App Store"
                },
            ]
        },
        {
            title: "asdasd",
            desc: "asdasdasd",
            links: [
                {
                    link: "asdasdasd",
                    desc: "Google Play"
                },
                {
                    link: "https://apps.apple.com/cr/app/factura-zen/id1500595487?l=en-GB",
                    desc: "App Store"
                },
            ]
        },
        {
            title: "asdasd",
            desc: "asdasdasd",
            links: [
                {
                    link: "asdasdasd",
                    desc: "Google Play"
                },
                {
                    link: "https://apps.apple.com/cr/app/factura-zen/id1500595487?l=en-GB",
                    desc: "App Store"
                },
            ]
        },
        {
            title: "asdasd",
            desc: "asdasdasd",
            links: [
                {
                    link: "asdasdasd",
                    desc: "Google Play"
                },
                {
                    link: "https://apps.apple.com/cr/app/factura-zen/id1500595487?l=en-GB",
                    desc: "App Store"
                },
            ]
        },
        
    ];

    return(
        <div className="text-center">
            <div>
                <p className="text-cyan-600 font-bold text-2xl md:text-4xl">
                    {t("project.title")}
                </p>
                {projects.map((pro) => (
                    <ProjectCard
                        key={t(pro.title)}
                        title={t(pro.title)}
                        desc={t(pro.desc)}
                        links={pro.links}
                    />
                ))}
            </div>
            <div>
                <p className="text-cyan-600 font-bold text-2xl md:text-4xl">
                    {t("project.personalTitle")}
                </p>
                {personalProjects.map((pro) => (
                    <ProjectCard
                        key={t(pro.title)}
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