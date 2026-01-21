import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import VantaBackground from "../components/VantaBackground";

const MainLayout = () => {
    return (
        <div className="relative h-screen p-10 text-cyan-800">


            <div className="border border-cyan-800 h-full p-10 flex flex-row justify-between">

                {/* Fondo animado */}
                <div className="absolute inset-0 -z-10">
                    <VantaBackground />
                </div>
                
                {/* Sidebar */}
                <aside>
                    <Sidebar />
                </aside>

                {/* Contenido */}
                <main className="flex items-end text-right">
                    <Outlet />
                </main>

            </div>

            <div className="text-sm m-1 font-bold">
            © Redwin Valverde Castro
            </div>
        </div>
    )

}

export default MainLayout;
