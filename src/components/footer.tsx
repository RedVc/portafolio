import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../i18n/languages";

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

  return (
    <div className="flex justify-between m-2">

      <div>
        © Redwin Valverde Castro
      </div>

      <div className="md:flex md:flex-col md:items-end">

        {/* Toggle mouse */}
        <label className="flex items-center gap-2 cursor-pointer select-none w-fit relative z-11 mb-1">
          <input
            type="checkbox"
            checked={mouseEnabled}
            onChange={(e) => onToggleMouse(e.target.checked)}
            className="accent-cyan-800 w-3"
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
    </div>
  );
};

export default Footer;