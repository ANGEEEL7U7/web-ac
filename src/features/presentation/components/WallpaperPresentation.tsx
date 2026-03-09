import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { UseTheme } from '@shared/providers'

export default function WallpaperPresentation({ className }: { className: string }) {
    const isDark = UseTheme().theme === 'dark';
    const _colors = {
        color1: isDark ? '#598cde' : '#b3e5ff',
        color2: isDark ? '#7967e0' : '#cfc2ff',
        color3: isDark ? '#070054' : '#504efa'
    }
    return <ShaderGradientCanvas
        pointerEvents='none'
        pixelDensity={1}
        className={className}
        lazyLoad={false}
        fov={45} ><ShaderGradient
        animate="on"
        brightness={1.3}
        cAzimuthAngle={-90}
        cDistance={16.3}
        cPolarAngle={20}
        cameraZoom={25.59}
        color1={_colors.color1}
        color2={_colors.color2}
        color3={_colors.color3}
        envPreset="city"
        grain="off"
        lightType="3d"
        positionX={0}
        positionY={0}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.4}
        rotationX={120}
        rotationY={0}
        rotationZ={0}
        shader="defaults"
        type="sphere"
        uAmplitude={1.7}
        uDensity={1.3}
        uFrequency={5.5}
        uSpeed={0.2}
        uStrength={0.6}
        uTime={0}
        wireframe={false}
      /></ShaderGradientCanvas>
}