import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer";
import VantaBackground from "../components/VantaBackground";
import { useMouseControl } from "../hooks/useMouseControl";
import { useLanguage } from "../hooks/useLanguage";

const MainLayout = () => {

  const [fading, setFading] = useState(false);
  const { mouseEnabled, mouseApplied, toggleMouse } = useMouseControl(setFading);
  const { currentLanguage, changeLanguage } = useLanguage(setFading);

  return (
    <div className="h-dvh flex flex-col bg-black text-gray-300 min-w-72 overflow-hidden">

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

        {/* Contenido encima del fondo */}
        <div className="relative z-10 flex-1 flex flex-col md:p-10 p-5 min-h-0">

          {/* Sidebar */}
          <aside className="mb-6">
            <Sidebar />
          </aside>

          {/* Scroll SOLO aquí */}
          <main className="flex-1 overflow-y-auto min-h-0 select-none lg:mr-52">
            <Outlet />
          </main>

        </div>

      </div>

      {/* Footer fijo abajo */}
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