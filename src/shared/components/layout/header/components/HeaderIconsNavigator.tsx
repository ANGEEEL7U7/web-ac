import { UseNavigatorScroll } from "@shared/providers";
import { Braces, Star, User } from 'lucide-react';

export default function HeaderIconsNavigator() {
    const { position, changePosition } = UseNavigatorScroll();

    return <div className="header-buttons">
        <button
            className="button group/header-icon-navigator"
            data-focus-section={position === 'profile'}
            data-color={position === 'profile' ? 'primary' : ''}
            data-animation="on"
            onClick={() => changePosition('profile')}>
            <span className="label-icon-header stadistics">Perfil</span>
            <User size={18} />
        </button>
        <button
            className="button group/header-icon-navigator"
            data-focus-section={position === 'skill'}
            data-color={position === 'skill' ? 'primary' : ''}
            data-animation="on"
            onClick={() => changePosition('skill')}>
            <span className="label-icon-header competences">Habilidades</span>
            <Braces size={18} />
        </button>
        <button
            className="button group/header-icon-navigator"
            data-focus-section={position === 'trajectory'}
            data-color={position === 'trajectory' ? 'primary' : ''}
            data-animation="on"
            onClick={() => changePosition('trajectory')}>
            <span className="label-icon-header education">Trayectoria</span>
            <Star size={18} />
        </button>
    </div>;
}
/*<div >
            
            
        </div> */