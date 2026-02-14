import { useTheme } from "@shared/hooks/theme";
import { ScrollBehavior } from "./header.hook";
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';


export default function Header() {
    const [scrollActivo, position] = ScrollBehavior();
    const { theme, changeTheme } = useTheme();

    return (
        <nav
            className={
                `${scrollActivo ? 'dark:bg-neutral-900 border dark:border-neutral-600 shadow-lg border-neutral-400 bg-body' : 'bg-transparent backdrop-blur-xs border-0'} 
            ${position > 0 ? ' top-2 rounded-2xl left-3 right-3' : 'top-0 left-0 right-0'}
                fixed px-4 py-5 transition-all z-10`
            }>
            <div className="hidden md:flex justify-between items-center">
                <span className="grow flex items-center gap-2 text-lg font-space italic">
                    <span>...</span>
                </span>
                <div className="flex gap-3">
                    <button className="button-outline">......</button>
                    <button className="button-outline">......</button>
                    <button className="button-outline">......</button>
                    <button className="button-outline">......</button>
                    <button onClick={changeTheme} className="cursor-pointer button-icon">
                        {theme === 'dark' ? <WbSunnyTwoToneIcon /> : <DarkModeTwoToneIcon />}
                    </button>
                </div>
            </div>
        </nav>
    )
}