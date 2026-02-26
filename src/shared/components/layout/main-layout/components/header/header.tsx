import { useTheme } from "@shared/hooks/theme";
import { ScrollBehavior } from "./header.hook";
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import CoffeeRoundedIcon from '@mui/icons-material/CoffeeRounded';
import './style-header.css'

export default function Header() {
    const [scrollActivo, position] = ScrollBehavior();
    const { theme, changeTheme } = useTheme();

    return (
        <nav className="header" data-scrolling={scrollActivo && position > 0}>
            <div className="hidden md:flex justify-between items-center">
                <span className="grow flex items-center gap-2 text-lg font-space italic">
                    <span>...</span>
                </span>
                <div className="flex gap-3">
                    <div className="flex gap-4 bg-body px-4 py-3 rounded-2xl border border-gray-500">
                        <button className="flex cursor-pointer transition-all duration-300 gap-2">
                            <CoffeeRoundedIcon className="translate-x-10 hover:translate-x-0 opacity-0 hover:opacity-100" />
                            <span>Presentación</span>
                        </button>
                        <button className="cursor-pointer hover:border-b transition-all duration-300">Contenido Ed</button>
                        <button className="cursor-pointer hover:border-b transition-all duration-300">Contenido Ch</button>
                        <button className="cursor-pointer hover:border-b transition-all duration-300">Contenido E</button>

                    </div>
                    <button onClick={changeTheme} className="cursor-pointer button icon">
                        {theme === 'dark' ? <WbSunnyTwoToneIcon /> : <DarkModeTwoToneIcon />}
                    </button>
                </div>
            </div>
        </nav>
    )
}
