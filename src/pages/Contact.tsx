import { Github, Instagram, Mail } from "lucide-react";
import { useState } from "react";
import Toast from "../components/ui/Toast";
import { useTranslation } from "react-i18next";



const Contact = () => {
    const [showToast, setShowToast] = useState(false);
    const [error, setError] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText("redvc13.03@gmail.com");
            setShowToast(true)
            setError(true);
        } catch (error) {
            console.error("Error al copiar:", error);
            setError(false);
        }
    }

    const { t } = useTranslation();

    return(
        <div className="w-full flex justify-center items-center flex-col gap-6">
            {/* email */}
            <div 
                className="w-fit flex items-center cursor-pointer"
                onClick={copyToClipboard}
             >
                <Mail className="text-blue-400 hover:text-blue-500"/>
                <p className="pl-1 hover:text-blue-400 font-semibold"
                 >
                    redvc13.03@gmail.com
                </p>
            </div>

            {/* Github */}
            <div 
                className="w-fit flex items-center cursor-pointer"
             >
                <Github className="text-blue-800 hover:text-blue-950"/>
                <a 
                    href="https://github.com/RedVc"
                    target="_blank"
                    className="pl-1 hover:text-blue-400 font-semibold"
                 >
                    Github
                </a>
            </div>

            {/* instagram */}
            <div 
                className="w-fit flex items-center cursor-pointer"
             >
                <Instagram className="text-pink-700 hover:text-pink-900"/>
                <a 
                    href="https://www.instagram.com/red.vc_/"
                    target="_blank"
                    className="pl-1 hover:text-pink-400 font-semibold"
                 >
                    Instagram
                </a>
            </div>

            <Toast
                message={error ? t("contact.toastCopy") : t("contact.toastError")}
                show={showToast}
                error={error}
                onClose={() => setShowToast(false)}
            />
        </div>

    )
}

export default Contact;