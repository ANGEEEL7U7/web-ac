import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'


const Content = () => {
    return <main className='overflow-hidden'>
        <article className='w-full h-svh'>
            <ShaderGradientCanvas pointerEvents='none' pixelDensity={1}
                fov={45}><ShaderGradient
                    animate="on"
                    
                    brightness={0.7}
                    cAzimuthAngle={270}
                    cDistance={0.5}
                    cPolarAngle={180}
                    cameraZoom={20}
                    color1='#ABC0FA'
                    color2='#4D5184'
                    color3='#8da0ce'
                    envPreset="city"
                    grain="on"
                    lightType="env"
                    positionX={-0.1}
                    positionY={0}
                    positionZ={0}
                    range="disabled"
                    rangeEnd={40}
                    rangeStart={0}
                    reflection={0.4}
                    rotationX={0}
                    rotationY={130}
                    rotationZ={70}
                    shader="defaults"
                    type="sphere"
                    uAmplitude={3.2}
                    uDensity={0.8}
                    uFrequency={5.5}
                    uSpeed={0.2}
                    uStrength={0.3}
                    uTime={0}
                    wireframe={false}
                />
            </ShaderGradientCanvas>
            <div className='absolute top-0 px-10 h-full w-full items-center flex text-white'>
                <div className='flex flex-col items-start'>
                    <h1 className='mb-4 text-5xl font-bold font-jet-brains md:w-1/2'>Angel Abraham C. G.</h1>
                    <p className='md:w-1/2 font-space'>Full stack con experiencia en la creación de sistemas web y móviles, Apasionado por la automaticacion de procesos con experiencia en la implementación de soluciones tecnológicas que han mejorado la eficiencia en proyectos anteriores y actuales.</p>
                </div>
            </div>
        </article>
    </main>
}

export default Content;
/*
<ShaderGradient control='query' urlString='https://shadergradient.co/customize?animate=on&axesHelper=off&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%23ABC0FA&color2=%234D5184&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false' />
*/