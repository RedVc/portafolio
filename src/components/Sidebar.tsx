import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { Eclipse } from "lucide-react";
import { useLinks } from "../links/links";

const Sidebar = () => {

  const { t } = useTranslation();

  const links = useLinks();

  return (
    <div className="lg:h-full select-none">
      
      {/* Titles */}
      <div className="mb-4 lg:mb-14">
        <p className="text-2xl lg:text-4xl font-semibold">
          Redwin Valverde Castro
        </p>
        <p>
          {t("sidebar.subtitle")}
        </p>
      </div>

      {/* Sidebar */}
      <div className="">
        <nav className="flex xl:w-fit w-full content-center gap-6 xl:flex-col justify-around">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-2 h-9 transition-colors 
                ${isActive ? "font-bold transition text-cyan-500" : "text-gray-300 hover:text-cyan-500 transition"}`
              }
            >
              {/* {({ isActive }) => (
                <>
                  {
                    isActive ?
                    <Eclipse className="text-cyan-500 left-0 w-4 animate-pulse" />:
                    <></>
                  }
                </>
              )} */}
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;