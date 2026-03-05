import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer";
import VantaBackground from "../components/VantaBackground";
import { useMouseControl } from "../hooks/useMouseControl";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslation } from "react-i18next";

const MainLayout = () => {

  const [ fading, setFading ] = useState(false);
  const { mouseEnabled, mouseApplied, toggleMouse } = useMouseControl(setFading);
  const { currentLanguage, changeLanguage } = useLanguage(setFading);
  
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const routeKey = location.pathname === "/" 
      ? "Home" 
      : location.pathname.replace("/", "");

    document.title = `${t(`routes.${routeKey}`)} | Redwin Valverde`;
  }, [location.pathname, i18n.language, t]);

  return (
    <div className="text-xs lg:text-base h-dvh flex flex-col bg-black text-gray-100 min-w-72 overflow-hidden lg:p-10 lg:pb-0">

      {/* Contenedor principal */}
      <div
        className={`relative flex-1 border border-cyan-950 flex flex-col overflow-hidden transition-opacity duration-700
        ${fading ? "opacity-0" : "opacity-100"}`}
      >

        {/* Fondo */}
        <div className="absolute inset-0 z-0">
          <VantaBackground mouseControls={mouseApplied} />
          <div className="absolute inset-0 bg-black/90 pointer-events-none" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col xl:flex-row lg:p-10 p-5 min-h-0 gap-6">

          <aside>
            <Sidebar />
          </aside>

          <main className="text-center flex justify-center overflow-y-auto min-h-0 select-none w-full h-full

            scrollbar-thin
            scrollbar-track-transparent
            scrollbar-thumb-transparent
            hover:scrollbar-thumb-cyan-700
            transition-colors
            ">
            <div className="my-auto w-full">
              <Outlet />
            </div>
          </main>
        </div>
      </div>

      <Footer
        mouseEnabled={mouseEnabled}
        currentLanguage={currentLanguage}
        onToggleMouse={toggleMouse}
        onChangeLanguage={changeLanguage}
      />
    </div>
  );
};

export default MainLayout;