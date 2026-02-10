
import { ScrollBehavior } from "./header.hooks";
//import FullHeaderMenu from "./components/full-header-menu/full-header-menu";
import SmallHeaderMenu from "./components/small-header-menu/small-header-menu";


export default function HeaderPage() {
    const [scrollActivo, position] = ScrollBehavior();

    return (
        <nav
            className={
                `${scrollActivo ? 'dark:bg-surf-container-hight bg-primary-container' : ''} 
            ${position > 0 ? ' top-2 mx-3 rounded-2xl' : 'top-0'}
            backdrop-blur-[2px] sticky px-4 py-5 transition-all duration-300 bg-body`
            }>
           
            <SmallHeaderMenu />
        </nav>
    )
}
