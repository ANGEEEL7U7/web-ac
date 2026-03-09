import { Mouse, Pointer } from 'lucide-react';
import { IS_MOBILE } from '@shared/utils';
import '../styles/presentation.css'
import WallpaperPresentation from '../components/WallpaperPresentation';

export default function Presentation() {
    return <section data-item-scrolling="hidden" className='f-screen-section'>
        <WallpaperPresentation className='f-wallpaper' />
        <div className='f-content-section'>
            <h1 className='f-content-section_title'>Lorem ipsum dolor sit amet</h1>
            <span className='font-space'>Full stack con experiencia en la creación de sistemas web y móviles, Apasionado por la automaticacion de procesos con experiencia en la implementación de soluciones tecnológicas que han mejorado la eficiencia en proyectos anteriores y actuales.</span>
            <div className='f-content-section_scroll_text'>
                {IS_MOBILE ? <Pointer /> : <Mouse />}
                <span className='ml-3'>
                    {IS_MOBILE ? 'Desliza' : 'Scroll'} para ver más información.
                </span>
            </div>
        </div>
    </section>
}