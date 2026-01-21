import { useEffect, useRef } from "react"
import * as THREE from "three"
import GLOBE from "vanta/dist/vanta.globe.min"

const VantaBackground = () => {
  
  const vantaRef = useRef<HTMLDivElement | null>(null)
  const vantaEffect = useRef<{ destroy: () => void } | null>(null)

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,

        // Colores de la web
        backgroundColor: 0x0,
        color: 0x155e69,
        color2: 0xffffff,

        size: 0.8,
      })
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      className="w-full h-full"
    />
  )
}

export default VantaBackground

