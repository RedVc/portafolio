import { useTranslation } from "react-i18next";

export type Links = {
    to: string;
    label: string;
    end: boolean;
};

export const useLinks = (): Links[] => {
  const { t } = useTranslation();

  return [
    { to: "/", label: t("sidebar.home"), end: true },
    { to: "/Projects", label: t("sidebar.projects"), end: false },
    { to: "/Contact", label: t("sidebar.contact"), end: false },
  ];
};