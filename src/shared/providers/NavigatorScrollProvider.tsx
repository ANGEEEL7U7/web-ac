import { createContext, useContext, useEffect, useRef, useState } from "react";
interface NavigatorScrollContextProps {
    position: string;
    changePosition: (name: string) => void;
}
const NavigatorScrollContext = createContext<NavigatorScrollContextProps | null>(null);
interface NavigatorScrollProps { children: React.ReactNode };

export const NavigatorScrollProvider = ({ children }: NavigatorScrollProps) => {
    const [activeObserver, setActiveObserver] = useState('');
    const isManualScroll = useRef(false);
    const observerRef = useRef<IntersectionObserver>(null);

    const _addPosition = (name: string) => {
        const ref = document.querySelector(`[data-item-scrolling="${name}"]`);
        if (!ref) return;
        setActiveObserver(name);
        window.history.pushState(null, '', `/${name}`);
    }
    const _hiddenPosition = () => {
        setActiveObserver('');
        window.history.pushState(null, '', '/');
    }

    useEffect(() => {
        const location = window.location.pathname.split('/')[1];
        if (location) {
            setActiveObserver(location);
            const element = document.querySelector(`[data-item-scrolling="${location}"]`)
            if (!element) return;
            element.scrollIntoView({ behavior: 'smooth' })
        }

        observerRef.current = new IntersectionObserver((entries) => {
            if (isManualScroll.current) return;
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    const name = entry.target.getAttribute('data-item-scrolling');
                    if (!name || name === 'hidden') _hiddenPosition()
                    else _addPosition(name);
                }
            })
        }, { threshold: 0.6 });
        const sections = document.querySelectorAll('[data-item-scrolling]');
        sections.forEach(section => observerRef.current?.observe(section));

        return () => observerRef.current?.disconnect();
    }, []);

    const changePosition = (name: string): void => {
        const ref = document.querySelector<HTMLElement>(`[data-item-scrolling="${name}"]`);
        if (!ref) return;

        isManualScroll.current = true;
        _addPosition(name);
        ref.scrollIntoView({ behavior: 'smooth' });

        const handleScroll = () => {
            isManualScroll.current = false;
            window.removeEventListener('scrollend', handleScroll);
        }
        window.addEventListener('scrollend', handleScroll);
    }

    return <NavigatorScrollContext.Provider value={{ position: activeObserver, changePosition }}>
        {children}
    </NavigatorScrollContext.Provider>
}
NavigatorScrollProvider.displayName = 'NavigatorScrollProvider';
export const UseNavigatorScroll = () => {
    const context = useContext(NavigatorScrollContext);
    if (!context) throw new Error("NavigatorScrollProvider is not loaded");
    
    return context;
};