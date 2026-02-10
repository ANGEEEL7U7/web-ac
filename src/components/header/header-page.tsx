
import { ScrollBehavior } from "./header.hooks";
import FullHeaderMenu from "./components/full-header-menu/full-header-menu";
import SmallHeaderMenu from "./components/small-header-menu/small-header-menu";


export default function HeaderPage() {
    const [scrollActivo, position] = ScrollBehavior();

    return (
        <nav
            className={
                `${scrollActivo ? 'dark:bg-surf-container-hight bg-primary-container' : 'bg-transparent'} 
            ${position > 0 ? ' top-2 rounded-2xl left-3 right-3' : 'top-0 left-0 right-0'}
                fixed px-4 py-5 transition-all duration-300 `
            }>
            <FullHeaderMenu />
            <SmallHeaderMenu />
        </nav>
    )
}
