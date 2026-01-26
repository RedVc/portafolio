import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="select-none" id="Sidebar">
           
           {/* Titles */}
            <div className="mb-10" id="Titles">
                <div className="text-5xl font-semibold" id="Title">
                    Redwin Valverde Castro
                </div>
                <div className="font-semibold" id="Subtitle">
                    Desarrollador Frontend
                </div>
           </div>

           {/* Sidebar */}
            <nav className="flex flex-col">
                <NavLink 
                    to="/" 
                    className="w-fit font-semibold">
                    
                    Inicio
                </NavLink>
                <NavLink 
                  to="/Projects"
                  className="w-fit font-semibold">
                    
                    Proyectos
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar;