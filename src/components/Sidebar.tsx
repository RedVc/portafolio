
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {

    const { t } = useTranslation();
    const location = useLocation();
    const ITEM_HEIGHT = 44;
    
    // links
    const links = [
        { to: "/", label: t("sidebar.home"), end: true },
        { to: "/Projects", label: t("sidebar.projects") },
        { to: "/Contact", label: t("sidebar.contact") },
    ];
    
    // activeindex
    const activeIndex = links.findIndex( 
        link => location.pathname === link.to
    );
    const safeIndex = activeIndex === -1 ? 0 : activeIndex;


    return (
    <div className="select-none">
      {/* Titles */}
      <div className="mb-10">
        <div className="text-5xl">Redwin Valverde Castro</div>
        <div>{t("sidebar.subtitle")}</div>
      </div>

      {/* Sidebar */}
      <nav className="relative grid">
        
        {/* Indicador */}
        <span
          className="absolute left-0 flex h-[44px] w-6 items-center justify-center text-cyan-600 transition-transform duration-500"
          style={{
            transform: `translateY(${safeIndex * ITEM_HEIGHT}px)`
          }}
        >
          ◕
        </span>

        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `h-[44px] pl-8 flex items-center transition-all
               ${isActive ? "font-bold" : "opacity-70"}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;