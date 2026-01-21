import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import VantaBackground from "../components/VantaBackground";

const MainLayout = () => {
  return (
    <div className="h-screen bg-black p-10 text-cyan-800">

      <div className="relative border border-cyan-800 h-full p-10 overflow-hidden">

        {/* Fondo animado */}
        <div className="absolute inset-0 z-0">
          <VantaBackground />
        </div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-row justify-between h-full">
          <aside>
            <Sidebar />
          </aside>

          <main className="flex items-end text-right">
            <Outlet />
          </main>
        </div>

      </div>

      <div className="text-sm m-1 font-bold">
        © Redwin Valverde Castro
      </div>

    </div>
  )
}



export default MainLayout;
