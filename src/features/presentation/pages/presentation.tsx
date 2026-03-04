import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import '../styles/presentation.css'
import { Mouse, Pointer } from 'lucide-react';
import { IS_MOBILE } from '@shared/utils';

const Presentation = () => <section className='w-full h-[50em] sm:h-svh'>
    <ShaderGradientCanvas
        pointerEvents='none'
        pixelDensity={1}
        lazyLoad={false}
        fov={45} >
        <ShaderGradient
            animate="on"
            brightness={0.1}
            cAzimuthAngle={0}
            cDistance={0.5}
            cPolarAngle={0}
            cameraZoom={20}
            color1="#ACC3F2"
            color2="#8531A3"
            color3="#3665C2"
            envPreset="city"
            grain="on"
            grainBlending={1}
            lightType="env"
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={150}
            rotationY={0}
            rotationZ={0}
            type="sphere"
            uAmplitude={8}
            uDensity={1}
            uFrequency={2}
            uSpeed={0.07}
            uStrength={0.5}
            uTime={0}
            wireframe={false}
        />
    </ShaderGradientCanvas>
    <div className='f_p_content_presentation'>
        <h1 className='f_p_title'>..... </h1>
        <span className='font-space'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sapien commodo turpis facilisis pulvinar vitae a ex. In non urna faucibus, semper nisi a, viverra felis. Nulla eget lobortis dui. Etiam dapibus ultricies consectetur. Suspendisse sagittis sed diam id scelerisque. Sed maximus, augue eu dignissim feugiat, tortor tellus eleifend libero, ut sodales augue neque vitae elit. Suspendisse a dui augue. Sed ultricies ex maximus rutrum pulvinar. Aliquam non enim dictum, mollis dui nec, malesuada ligula. Vivamus non sodales libero, at gravida lorem. Quisque mollis faucibus quam pellentesque tincidunt. Donec euismod nec turpis at blandit. Vivamus luctus porttitor consequat. Phasellus eu suscipit felis. Sed ligula urna, tristique sit amet odio et, pharetra volutpat elit.</span>
        <div className='absolute bottom-5 flex font-space'>
            {IS_MOBILE ? <Pointer /> : <Mouse />}
            <span className='ml-2'>
                {IS_MOBILE ? 'Desliza' : 'Scroll'} para ver más información.
            </span>
        </div>
    </div>
</section>

export default Presentation;