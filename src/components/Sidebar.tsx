import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {

  const { t } = useTranslation();

  const links = [
    { to: "/", label: t("sidebar.home"), end: true },
    { to: "/Projects", label: t("sidebar.projects") },
    { to: "/Contact", label: t("sidebar.contact") },
  ];

  return (
    <div className="select-none">
      
      {/* Titles */}
      <div className="mb-10">
        <div className="text-3xl md:text-5xl">
          Redwin Valverde Castro
        </div>
        <div className="md:text-base">
          {t("sidebar.subtitle")}
        </div>
      </div>

      {/* Sidebar */}
      <nav className="grid w-fit content-center gap-2">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-2 h-9 transition-colors
              ${isActive ? "font-bold" : "opacity-70"}`
            }
          >
            {({ isActive }) => (
              <>
                <span className="text-cyan-600 left-0 w-3 text-lg md:text-sm animate-pulse">
                  {isActive && "◕"}
                </span>
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