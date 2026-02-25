import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer";
import VantaBackground from "../components/VantaBackground";
import { useMouseControl } from "../hooks/useMouseControl";
import { useLanguage } from "../hooks/useLanguage";

const MainLayout = () => {

  const [fading, setFading] = useState( false );
  const { mouseEnabled, mouseApplied, toggleMouse } = useMouseControl( setFading );
  const { currentLanguage, changeLanguage } = useLanguage( setFading );

  return (
    <div className="min-h-svh bg-black text-gray-300 flex flex-col md:p-10 md:pb-0 p-1 text-xs md:text-base min-w-72">

      <div
        className={`relative border border-cyan-950 flex-1 md:p-10 p-5 overflow-hidden flex flex-col transition-opacity duration-700 
        ${fading ? "opacity-0" : "opacity-100"}`
        }
       >

        {/* Fondo animado */}
        <div className="absolute inset-0 z-0">
          <VantaBackground mouseControls={mouseApplied} />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/90 pointer-events-none" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 flex lg:flex-row flex-col justify-between flex-1 gap-6">
          
          <div>
            <aside>
              <Sidebar />
            </aside>
          </div>

          <main className="flex items-end justify-center select-none lg:mr-52">
              <Outlet />
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
  )
}

export default MainLayout;
