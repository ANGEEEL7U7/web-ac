import { UseTheme } from "@shared/providers";
import { Moon, Sun } from 'lucide-react';


export default function ButtonIconTheme() {
    const { theme, changeTheme } = UseTheme();
    return <button onClick={changeTheme} className="button icon outlined" data-animation="on">
        <Sun className={`inline-flex transition-transform duration-400 ${theme !== 'dark' ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
        <Moon className={`absolute inline-flex transition-transform duration-400 ${theme !== 'light' ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
    </button>
}