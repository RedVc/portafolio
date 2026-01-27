import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {

    const { t } = useTranslation();

    // NavLinkClass
    const navLinkClass = ({ isActive }: { isActive: boolean }) => 
        `w-fit ${isActive ? "font-bold text-cyan-600" : ""}`
    ;

    return(
        <div className="select-none" id="Sidebar">
           
           {/* Titles */}
            <div className="mb-10" id="Titles">
                <div className="text-5xl" id="Title">
                    Redwin Valverde Castro
                </div>
                <div className="" id="Subtitle">                    
                    {t("sidebar.subtitle")}
                </div>
           </div>

           {/* Sidebar */}
            <nav className="flex flex-col">
                <NavLink 
                  to="/" 
                  end
                  className={navLinkClass}
                 >
                    {t("sidebar.home")}
                </NavLink>
                <NavLink 
                  to="/Projects"
                  className={navLinkClass}
                 >
                    {t("sidebar.projects")}
                </NavLink>
                <NavLink 
                  to="/Contact"
                  className={navLinkClass}
                 >
                    {t("sidebar.contact")}
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar;