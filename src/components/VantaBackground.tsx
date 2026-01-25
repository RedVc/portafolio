import { useEffect, useRef } from "react"
import * as THREE from "three"
import NET from "vanta/src/vanta.net"

type VantaEffect = {
  destroy: () => void
}
type VantaBackgroundProps = {
  mouseControls: boolean,
}

const VantaBackground = ({ mouseControls }: VantaBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement | null>(null)
  const vantaEffect = useRef<VantaEffect | null>(null)

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls,
        touchControls: true,
        gyroControls: true,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,

        color: 0x028f77,
        backgroundColor: 0x0,
        points: 8,
        maxDistance: 12,
        spacing: 10,
        showDots: true,
      })
    }

    return () => {
      vantaEffect.current?.destroy()
      vantaEffect.current = null
    }
  }, [ mouseControls ])

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 -z-10"
    />
  )
}

export default VantaBackground
