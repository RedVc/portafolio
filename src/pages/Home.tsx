import { useTranslation } from "react-i18next";
const Home = () => {
    const { t } = useTranslation();

    return(
        <div className="flex justify-center">
            <div className="w-5/6 lg:w-1/2 flex flex-col gap-1">
                <p>
                    {t("home.p1")}
                </p>
                <p>
                    {t("home.p2")}
                </p>
                <p>
                    {t("home.p3")}
                </p>
                <p>
                    {t("home.p4")}
                </p>
                <p>
                    {t("home.p5")}
                </p>
                <p>
                    {t("home.p6")}
                </p>
                <p>
                    {t("home.p7")}
                </p>
            </div>
        </div>
    )
}

export default Home;