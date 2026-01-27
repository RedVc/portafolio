
import { Outlet } from "react-router-dom";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../i18n/languages";

import Sidebar from "../components/Sidebar";
import VantaBackground from "../components/VantaBackground";

const MainLayout = () => {
  const [mouseEnabled, setMouseEnabled] = useState(true);
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col p-10">

      <div className="relative border border-cyan-800 flex-1 p-10 overflow-hidden flex flex-col">

        {/* Fondo animado */}
        <div className="absolute inset-0 z-0">
          <VantaBackground mouseControls={mouseEnabled} />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-row justify-between flex-1">
          
          <div className="flex flex-col justify-between">
            <aside>
              <Sidebar />
            </aside>
          </div>

          <main className="flex items-end text-right">
            <Outlet />
          </main>

        </div>

        <div>
          <label className="flex items-center gap-2 text-sm cursor-pointer select-none w-fit relative z-11">
            <input
              type="checkbox"
              checked={mouseEnabled}
              onChange={(e) => setMouseEnabled(e.target.checked)
                
              }
              className="accent-cyan-700 p-14"
            />
            {/* Movimiento */}
            {t("layout.mouse")}
          </label>

          {/* Cambio de idioma */}
          <div className="flex items-center gap-4 text-sm select-none relative z-11">
            {LANGUAGES.map((lang) => (
              <label 
                key={lang.code}
                className="flex items-center gap-1 cursor-pointer"
              >
                <input 
                  type="radio" 
                  name="language"
                  checked={i18n.language === lang.code}
                  onChange={ () => i18n.changeLanguage(lang.code) }
                  className="cursor-pointer"
                />
                <p className={ i18n.language === lang.code ? "font-bold" : ""}>
                  {lang.label}
                </p>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="text-sm font-bold mt-2">
        © Redwin Valverde Castro
      </div>

    </div>
  )
}

export default MainLayout;
