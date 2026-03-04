import { ScrollBehavior } from "./header.hook";
import { Braces, Moon, Star, Sun, User } from 'lucide-react';
import './style-header.css'
import { UseNavigatorScroll, UseTheme } from "@shared/providers";

export default function Header() {
    const [scrollActivo] = ScrollBehavior();
    const { theme, changeTheme } = UseTheme();
    const { changePosition } = UseNavigatorScroll();

    return <header className="header" data-scrolling={scrollActivo}>
        <nav>
            {/* contenido para pantallas grandes */}
            <div className="header-navigation">
                <div className="header-buttons">
                    <button className="button-header-nav" onClick={() => changePosition('profile')}>Estadistica</button>
                    <button className="button-header-nav">Competencias</button>
                    <button className="button-header-nav">Ediciones</button>
                </div>
                <button onClick={changeTheme} className="button icon transition-all">
                    <Sun className={`inline-flex transition-transform duration-400 ${theme !== 'dark' ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                    <Moon className={`absolute inline-flex transition-transform duration-400 ${theme !== 'light' ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                </button>
            </div>
            {/* contenido para pantallas grandes */}

            {/* contenido para pantallas pequeñas */}
            <div className="header-navigation-small">
                <div className="header-buttons">
                    <button className="group button-header-nav focus icon-header ">
                        <span className="label-icon-header stadistics">Perfil</span>
                        <User size={18} className="icon-button-header" />
                    </button>
                    <button className="group button-header-nav focus icon-header ">
                        <span className="label-icon-header competences">Habilidades</span>
                        <Braces size={18} className="icon-button-header" />
                    </button>
                    <button className="group button-header-nav focus icon-header ">
                        <span className="label-icon-header education">Trayectoria</span>
                        <Star size={18} className="icon-button-header" />
                    </button>
                </div>
                <button onClick={changeTheme} className="button icon transition-all">
                    <Sun className={`inline-flex transition-transform duration-400 ${theme !== 'dark' ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                    <Moon className={`absolute inline-flex transition-transform duration-400 ${theme !== 'light' ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                </button>
            </div>
        </nav>
    </header>
}