import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Orbit } from "lucide-react";
import { useLinks } from "../links/links";

const Sidebar = () => {

  const { t } = useTranslation();

  const links = useLinks();

  return (
    <div className="select-none">
      
      {/* Titles */}
      <div className="mb-7">
        <p className="text-3xl lg:text-5xl font-semibold">
          Redwin Valverde Castro
        </p>
        <p>
          {t("sidebar.subtitle")}
        </p>
      </div>

      {/* Sidebar */}
      <nav className="text-sm lg:text-base flex xl:w-fit w-full content-center gap-6 xl:flex-col justify-around">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-2 h-9 transition-colors 
              ${isActive ? "text-cyan-500 font-bold transition" : "text-gray-400 hover:text-cyan-500 transition"}`
            }
          >
            {({ isActive }) => (
              <>
                {
                  isActive ?
                  <Orbit className="text-gray-50 left-0 w-3 animate-pulse" />:
                  <></>
                }
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;