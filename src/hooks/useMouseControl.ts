import { useState, useEffect } from "react";

export const useMouseControl = ( setFading: (value:boolean) => void ) => {

    // Obtiene el valor de mouseEnabled
    const [mouseEnabled, setMouseEnabled] = useState<boolean>(() => {
        const stored = localStorage.getItem("mouseEnabled");
        if (stored === null) return true;
        return stored === "true";
    });

    // Aplica el applied del mouse para el fade
    const [mouseApplied, setMouseApplied] = useState<boolean>(mouseEnabled);

    // Aplica el valor de mouse applied
    useEffect(() => {
        localStorage.setItem("mouseEnabled", String(mouseEnabled));
    }, [mouseEnabled]);

    // Función del mouse enabled 
    const toggleMouse = (checked: boolean) => {
        setMouseEnabled(checked);
        setFading(true);

        setTimeout(() => {
        setMouseApplied(checked);
        setFading(false);
        }, 500);
    };

    // Hace visibles las variables y la función
    return {
        mouseEnabled,
        mouseApplied,
        toggleMouse,
    };
};