import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import MouseTwoToneIcon from '@mui/icons-material/MouseTwoTone';
import SwipeUpTwoToneIcon from '@mui/icons-material/SwipeUpTwoTone';
import { IS_MOBILE } from '@shared/utils/conts';

const Content = () => {
    return <main className='overflow-hidden'>
        <article className='w-full h-svh'>
            <ShaderGradientCanvas pointerEvents='none' pixelDensity={1} fov={45}>
                <ShaderGradient
                    animate="on"
                    control='props'
                    brightness={1.2}
                    cAzimuthAngle={180}
                    cDistance={3.6}
                    cPolarAngle={90}
                    cameraZoom={1}
                    color1='#ABC0FA'
                    color2='#4D5184'
                    color3='#8da0ce'
                    envPreset="city"
                    grain="on"
                    lightType="3d"
                    positionX={-1.4}
                    positionY={0}
                    positionZ={0}
                    range="disabled"
                    rangeEnd={40}
                    rangeStart={0}
                    reflection={0.1}
                    rotationX={0}
                    rotationY={10}
                    rotationZ={50}
                    shader="defaults"
                    type="plane"
                    uAmplitude={1}
                    uDensity={1.3}
                    uFrequency={5.5}
                    uSpeed={0.4}
                    uStrength={4}
                    uTime={0}
                    wireframe={false}
                />
            </ShaderGradientCanvas>
            <div className='absolute top-0 flex flex-col justify-center h-full pt-20 pb-10 px-10 w-full text-white'>
                <div className='flex flex-col items-start mt-auto'>
                    <h1 className='text-5xl font-bold font-jet-brains md:w-1/2 mb-5'>Title page.</h1>
                    <p className='md:w-1/2 font-space'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet eleifend purus, non euismod nisl consequat ac. Cras a dui quis nisl consequat ullamcorper. Sed hendrerit eros nec pharetra congue. Vestibulum fermentum tortor quis leo tempus, ac interdum quam tincidunt. Nam scelerisque dolor non magna rhoncus, eget dapibus arcu luctus. Nullam sodales ante sit amet velit ullamcorper, et ornare est egestas. In aliquam libero sem, at aliquam urna fermentum eu.</p>
                </div>
                <div className='flex mt-auto items-center'>
                <button className="px-6 py-2 rounded-full bg-blue-500 text-white font-semibold 
               transition-all duration-150 ease-in-out
               active:bg-blue-700 active:scale-95 active:ring-2 active:ring-blue-300">
  Click Me
</button>
                    <span className='ml-2'>{IS_MOBILE ? 'Desliza' : 'Scroll'} para ver más información.</span>
                </div>
            </div>
        </article>
    </main>
}

export default Content;
