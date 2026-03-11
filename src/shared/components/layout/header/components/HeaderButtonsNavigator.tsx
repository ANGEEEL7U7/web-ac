import { ButtonIconTheme } from "@shared/components";
import { UseNavigatorScroll } from "@shared/providers";


export default function HeaderButtonsNavigator() {
    const { position, changePosition } = UseNavigatorScroll();

    return (
        <div className="header-navigation">
            <div className="header-buttons">
                <button
                    className="button"
                    data-animation="on"
                    data-color={position === 'profile' ? 'primary':''}
                    onClick={() => { changePosition('profile') }}>Perfiles</button>
                <button
                    className="button"
                    data-animation="on"
                    data-color={position === 'skill' ? 'primary':''}
                    onClick={() => changePosition('skill')}>Competencias</button>
                <button
                    className="button"
                    data-animation="on"
                    data-color={position === 'trajectory' ? 'primary':''}
                    onClick={() => changePosition('trajectory')}>Ediciones</button>
            </div>
            <ButtonIconTheme />
        </div>);
}