import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <div id="Sidebar">
           
           {/* Titles */}
            <div className="mb-10" id="Titles">
                <div className="text-5xl" id="Title">
                    Redwin Valverde Castro
                </div>
                <div id="Subtitle">
                    Desarrollador Frontend
                </div>
           </div>

           {/* Sidebar */}
            <nav className="flex flex-col">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/Projects">
                    Proyectos
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar;