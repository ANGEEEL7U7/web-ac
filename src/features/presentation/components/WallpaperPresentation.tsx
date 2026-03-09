import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { UseTheme } from '@shared/providers'

export default function WallpaperPresentation({ className }: { className: string }) {
    const isDark = UseTheme().theme === 'dark';
    const _colors = {
        color1: isDark ? '#593f8d' : '#6879f3',
        color2: isDark ? '#453359' : '#9f98d6',
        color3: isDark ? '#2e2340' : '#352a72'
    }
    return <ShaderGradientCanvas
        pointerEvents='none'
        pixelDensity={0.7}
        className={className}
        lazyLoad={false}
        fov={45} ><ShaderGradient
            animate="on"
            brightness={1.5}
            cAzimuthAngle={250}
            cDistance={1.5}
            cPolarAngle={140}
            cameraZoom={21.19}
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
            reflection={0.5}
            rotationX={0}
            rotationY={140}
            rotationZ={50}
            shader="defaults"
            type="sphere"
            uAmplitude={3.2}
            uDensity={1.8}
            uFrequency={5.5}
            uSpeed={0.1}
            uStrength={0.5}
            uTime={0}
            wireframe={false}
        /></ShaderGradientCanvas>
}