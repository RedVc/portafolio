import { useTranslation } from "react-i18next";

export const useLanguage = (setFading: (value: boolean) => void) => {
  const { i18n } = useTranslation();

//   Cambia el idioma, aplica el fade y almacena el lenguaje seleccionado
  const changeLanguage = (code: string) => {
    setFading(true);

    setTimeout(() => {
      i18n.changeLanguage(code);
      localStorage.setItem("language", code);
      setFading(false);
    }, 500);
  };

  // Hace visible el lenguaje seleccionado y su función para su uso
  return {
    currentLanguage: i18n.language,
    changeLanguage,
  };
};