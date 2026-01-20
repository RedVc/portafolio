import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
    return(
        <div className="h-screen bg-black p-10 text-cyan-800" id="background">

            <div className="border border-cyan-800 h-full p-10 flex flex-row justify-between">

                {/* Sidebar */}
                <aside>
                    <Sidebar/>
                </aside>

                {/* Contenido */}
                <main className="flex items-end text-right">
                    <Outlet/>
                </main>
            </div>

            <div className="text-sm m-1 font-bold">
                © Redwin Valverde Castro
            </div>
        </div>
    )
}

export default MainLayout;
