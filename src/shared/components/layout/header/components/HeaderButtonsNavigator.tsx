import { ButtonIconTheme } from "@shared/components";
import { UseNavigatorScroll } from "@shared/providers";


export default function HeaderButtonsNavigator() {
    const { position, changePosition } = UseNavigatorScroll();

    return (
        <div className="header-navigation">
            <div className="header-buttons">
                <button
                    className="button text"
                    data-animation="on"
                    data-focus-section={position === 'profile'}
                    onClick={() => { changePosition('profile') }}>Perfiles</button>
                <button
                    className="button-header-nav"
                    data-focus-section={position === 'skill'}
                    onClick={() => changePosition('skill')}>Competencias</button>
                <button
                    className="button-header-nav"
                    data-focus-section={position === 'trajectory'}
                    onClick={() => changePosition('trajectory')}>Ediciones</button>
            </div>
            <ButtonIconTheme />
        </div>);
}