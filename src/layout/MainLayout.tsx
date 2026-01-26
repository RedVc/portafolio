import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import VantaBackground from "../components/VantaBackground";
import { useState } from "react";


const MainLayout = () => {
  const [mouseEnabled, setMouseEnabled] = useState(true);

  return (
    <div className="h-screen bg-black p-10 text-gray-300">

      <div className="relative border border-cyan-800 h-full p-10 overflow-hidden">

        {/* Fondo animado */}
        <div className="absolute inset-0 z-0">
          <VantaBackground mouseControls={mouseEnabled} />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-row justify-between h-full">
          
          <div className="flex flex-col justify-between">
            <aside>
              <Sidebar />
            </aside>

          </div>

          <main className="flex items-end text-right">
            <Outlet />
          </main>


        </div>

            <label className="flex items-center gap-2 text-sm cursor-pointer select-none w-fit relative z-11">
              <input
                type="checkbox"
                checked={mouseEnabled}
                onChange={(e) => setMouseEnabled(e.target.checked)}
                className="accent-cyan-700 p-14"
              />
              Movimiento con mouse
            </label>
            {/* <label className="flex items-center gap-2 text-sm cursor-pointer select-none w-fit relative z-11">
              <input
                type="checkbox"
                checked={languajeEnabled}
                onChange={(e) => setLanguaje(e.target.checked)}
                className="accent-cyan-700 p-14"
              />
              esp, ing
            </label> */}

      </div>

      <div className="text-sm m-1 font-bold">
        © Redwin Valverde Castro
      </div>

    </div>
  )
}

export default MainLayout;
