import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import { DarkMode } from '../../../../shared/hooks/dark-mode.hook';

const FullHeaderMenu = () => {
    const { isDark, setDark } = DarkMode();

    return (
        <div className="hidden md:flex justify-between items-center">
            <span className="grow">Algo</span>
            <div className="flex gap-3">
                <button className="button-outline">Experiencia</button>
                <button className="button-outline">Habilidades</button>
                <button className="button-outline">Educación</button>
                <button className="button-outline">Competencias</button>
                <button onClick={setDark} className="cursor-pointer button-icon">
                    {isDark && <WbSunnyTwoToneIcon />}
                    {!isDark && <DarkModeTwoToneIcon />}
                </button>
            </div>
        </div>
    )
}
export default FullHeaderMenu