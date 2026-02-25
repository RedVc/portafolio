import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLinks } from "../links/links";

const Sidebar = () => {

  const { t } = useTranslation();

  const links = useLinks();

  return (
    <div className="select-none">
      
      {/* Titles */}
      <div className="mb-7">
        <div className="text-3xl md:text-5xl">
          Redwin Valverde Castro
        </div>
        <div className="md:text-base">
          {t("sidebar.subtitle")}
        </div>
      </div>

      {/* Sidebar */}
      <nav className="flex lg:w-fit w-full content-center gap-6 lg:flex-col justify-around">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-2 h-9 transition-colors 
              ${isActive ? "font-bold" : "opacity-70 hover:text-gray-50"}`
            }
          >
            {({ isActive }) => (
              <>
                {
                  isActive ?
                  <span className="text-cyan-600 left-0 w-3 text-lg md:text-sm animate-pulse">
                    ◕
                  </span>:
                  ""
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