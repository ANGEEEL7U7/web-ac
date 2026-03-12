import { IsSmallScreen } from "./header.hook";
import './header.style.css'
import HeaderButtonsNavigator from "./components/HeaderButtonsNavigator";
import HeaderIconsNavigator from "./components/HeaderIconsNavigator";
import ButtonIconTheme from "@shared/components/ui/ButtonIconTheme";


export default function Header() {
    //si es true muestra un elemento si no muestra el otro
    const isSmall = IsSmallScreen();

    return <header className="header">
        <nav className="header-navigation">
            {isSmall ? <HeaderIconsNavigator /> : <HeaderButtonsNavigator />}
            <ButtonIconTheme />
        </nav>
    </header>
}