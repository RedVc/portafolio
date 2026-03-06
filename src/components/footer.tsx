import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../i18n/languages";
import { useState, useEffect } from "react";
import { SquarePlus, SquareMinus, Copyright } from "lucide-react";

interface FooterProps {
  mouseEnabled: boolean;
  currentLanguage: string;
  onToggleMouse: (checked: boolean) => void;
  onChangeLanguage: (code: string) => void;
}

const Footer = ({
  mouseEnabled,
  currentLanguage,
  onToggleMouse,
  onChangeLanguage,
}: FooterProps) => {
  const { t } = useTranslation();

  // Obtiene el valor de mouseEnabled
  const [visibleOptions, setVisibleOptions] = useState<boolean>(() => {
    const stored = localStorage.getItem("visibleOptions");
    if (stored === null) return true;
    return stored === "true";
  });

  useEffect(() => {
    localStorage.setItem("visibleOptions", String(visibleOptions));
  }, [visibleOptions]);

  return (
    <div className="flex justify-between m-1 select-none">
      <div className="text-gray-400 h-fit flex gap-1 items-center ">
        <Copyright size={16} />
        <p>Redwin Valverde Castro</p>
      </div>

      <div>
        {
          visibleOptions ? 
          (
            <div className="flex gap-2">
              <div className="flex flex-col">
                {/* Toggle mouse */}
                <label className="flex items-center gap-2 cursor-pointer select-none w-fit relative z-11 mb-1">
                  <input
                    type="checkbox"
                    checked={mouseEnabled}
                    onChange={(e) => onToggleMouse(e.target.checked)}
                    className="accent-cyan-700 w-3 cursor-pointer"
                  />
                  {t("layout.mouse")}
                </label>

                {/* Cambio de idioma */}
                <div className="flex gap-4 select-none relative z-11">
                  {LANGUAGES.map((lang) => (
                    <label
                      key={lang.code}
                      className="accent-cyan-700 flex items-center gap-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="language"
                        checked={currentLanguage === lang.code}
                        onChange={() => onChangeLanguage(lang.code)}
                        className="cursor-pointer w-3"
                      />
                      <p>{lang.label}</p>
                    </label>
                  ))}
                </div>
              </div>

              <SquareMinus
                className="w-4 lg:w-5 text-cyan-500 cursor-pointer"
                onClick={() => setVisibleOptions(false)}
              />
            </div>
        ) : (
          <SquarePlus
            className="w-4 lg:w-5 text-cyan-500 cursor-pointer"
            onClick={() => setVisibleOptions(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
