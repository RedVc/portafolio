
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../i18n/languages";

import Sidebar from "../components/Sidebar";
import VantaBackground from "../components/VantaBackground";

const MainLayout = () => {
  const [mouseEnabled, setMouseEnabled] = useState<boolean>(() => {
    const stored = localStorage.getItem("mouseEnabled");
    if (stored === null) return true;
    return stored === "true";
  });
  const [mouseApplied, setMouseApplied] = useState<boolean>(mouseEnabled);
  const [fading, setFading] = useState(false);
  const { t, i18n } = useTranslation();
 
  // Se ejecuta cuando mouseEnabled cambia su valor
  useEffect(() => {
    localStorage.setItem( "mouseEnabled", String(mouseEnabled) );
  }, [mouseEnabled]);

  return (
    <div className="min-h-svh bg-black text-gray-300 flex flex-col md:p-10 md:pb-0 p-1 text-xs md:text-base">

      <div
        className={`relative border border-cyan-950 flex-1 md:p-10 p-5 overflow-hidden flex flex-col transition-opacity duration-700 
        ${fading ? "opacity-0" : "opacity-100"}`
        }
       >

        {/* Fondo animado */}
        <div className="absolute inset-0 z-0">
          <VantaBackground mouseControls={mouseApplied} />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/80 pointer-events-none" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 flex lg:flex-row flex-col justify-between flex-1 gap-2">
          
          <div>
            <aside>
              <Sidebar />
            </aside>
          </div>

          <main className="flex items-end justify-center select-none text-center">
              <Outlet />
          </main>

        </div>

      </div>

      <div className="flex justify-between m-2">

        <div className="">
          © Redwin Valverde Castro
        </div>

        {/* Seguimiento de mouse */}
        <div className="md:flex md:flex-col md:items-end">
          <label className="flex items-center gap-2 cursor-pointer select-none w-fit relative z-11 mb-1">
            <input
              type="checkbox"
              checked={mouseEnabled}
              onChange={(e) => {
                const checked = e.target.checked;

                setMouseEnabled(checked);
                setFading(true);

                setTimeout(() => {
                  setMouseApplied(checked);
                  setFading(false);
                }, 500);
              }}
              className="accent-cyan-800"
            />
            {t("layout.mouse")}
          </label>

          {/* Cambio de idioma */}
          <div className="flex gap-4 select-none relative z-11">
            {LANGUAGES.map((lang) => (
              <label 
                key={lang.code}
                className="flex items-center gap-1 cursor-pointer"
              >
                <input 
                  type="radio" 
                  name="language"
                  checked={i18n.language === lang.code}
                  onChange={ () => { 
                    setFading(true);
                    
                    setTimeout(() => {
                      i18n.changeLanguage(lang.code);
                      localStorage.setItem("language", lang.code);
                      setFading(false);
                    }, 500);
                    
                  }}
                  className="cursor-pointer"
                />
                <p>
                  {lang.label}
                </p>
              </label>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MainLayout;
