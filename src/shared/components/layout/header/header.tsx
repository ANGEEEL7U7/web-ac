import { IsSmallScreen } from "./header.hook";
import './header.style.css'
import HeaderButtonsNavigator from "./components/HeaderButtonsNavigator";
import HeaderIconsNavigator from "./components/HeaderIconsNavigator";


export default function Header() {
    //si es true muestra un elemento si no muestra el otro
    const isSmall = IsSmallScreen();

    return <header className="header">
        <nav>
            {!isSmall ? <HeaderButtonsNavigator /> : <HeaderIconsNavigator />}
        </nav>
    </header>
}