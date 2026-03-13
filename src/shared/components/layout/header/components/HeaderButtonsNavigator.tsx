import { UseNavigatorScroll } from "@shared/providers";

export default function HeaderButtonsNavigator() {
    const { position, changePosition } = UseNavigatorScroll();

    return <div className="header-buttons">
        <button
            className={`button text${position === 'profile' ? ' active' : ''}`}
            data-animation="on"
            data-color="primary"
            onClick={() => { changePosition('profile') }}>Perfiles</button>
        <button
            className={`button text${position === 'skill' ? ' active' : ''}`}
            data-animation="on"
            data-color="primary"
            onClick={() => changePosition('skill')}>Competencias</button>
        <button
            className={`button text${position === 'trajectory' ? ' active' : ''}`}
            data-animation="on"
            data-color="primary"
            onClick={() => changePosition('trajectory')}>Ediciones</button>
    </div>;
}