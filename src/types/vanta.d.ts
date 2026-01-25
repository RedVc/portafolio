declare module "vanta/src/vanta.net" {
  import type * as THREE from "three"

  interface VantaNetOptions {
    el: HTMLElement
    THREE: typeof THREE
    mouseControls?: boolean
    touchControls?: boolean
    gyroControls?: boolean
    minHeight?: number
    minWidth?: number
    scale?: number
    scaleMobile?: number

    color?: number
    lineColor?: number
    backgroundColor?: number
    points?: number
    maxDistance?: number
    spacing?: number
    showDots?: boolean
  }

  interface VantaEffect {
    destroy: () => void
  }

  export default function NET(
    options: VantaNetOptions
  ): VantaEffect
}


