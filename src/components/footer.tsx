import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../i18n/languages";
import { useState, useEffect } from "react";
import { SquarePlus, SquareMinus } from "lucide-react";

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

  // Obtiene el valor de mouseEnabled
  const [visibleOptions, setVisibleOptions] = useState<boolean>(() =>
    localStorage.getItem("visibleOptions") !== "false"
  );

  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("visibleOptions", String(visibleOptions));
  }, [visibleOptions]);

  return (
    <div className="flex justify-between m-1">

      <p>
        © Redwin Valverde Castro
      </p>

      <div className="flex items-start gap-2">
        {
          visibleOptions ?
          <div>
            {/* Toggle mouse */}
            <label className="flex items-center gap-2 cursor-pointer select-none w-fit relative z-11 mb-1">
              <input
                type="checkbox"
                checked={mouseEnabled}
                onChange={(e) => onToggleMouse(e.target.checked)}
                className="accent-cyan-800 w-3 cursor-pointer"
              />
              {t("layout.mouse")}
            </label>

            {/* Cambio de idioma */}
            <div className="flex gap-4 select-none relative z-11">
              {LANGUAGES.map((lang) => (
                <label
                  key={lang.code}
                  className="accent-cyan-800 flex items-center gap-1 cursor-pointer"
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
          :
          null
        }
        <div className="text-cyan-800 cursor-pointer">
          {
            visibleOptions ?
            <SquareMinus 
              className="w-5" 
              onClick={() => setVisibleOptions(false)} 
            />
            :
            <SquarePlus 
              className="w-5" 
              onClick={() => setVisibleOptions(true)} 
            />
          }
        </div>

      </div>
    </div>
  );
};

export default Footer;