declare module "vanta/dist/vanta.globe.min" {
  export interface VantaEffect {
    destroy: () => void
  }

  export interface VantaOptions {
    el: HTMLElement | null
    THREE?: typeof import("three")
    mouseControls?: boolean
    touchControls?: boolean
    gyroControls?: boolean
    minHeight?: number
    minWidth?: number
    scale?: number
    scaleMobile?: number
    color?: number
    color2?: number
    backgroundColor?: number
    size?: number
  }

  const GLOBE: (options: VantaOptions) => VantaEffect
  export default GLOBE
}

