import React, { createContext, useContext, useEffect, useRef } from "react";
interface SectionRef {
    [key: string]: React.RefObject<HTMLElement | null>
}
export interface NavigatorScrollContextProps {
    sectionsRef: SectionRef;
    changePosition: (name: string) => void;
}
interface NavigatorScrollProps { children: React.ReactNode };
const NavigatorScrollContext = createContext<NavigatorScrollContextProps | null>(null);

export const NavigatorScrollProvider = ({ children }: NavigatorScrollProps) => {
    const sectionsRef: SectionRef = {
        profile: useRef(null),
        skill: useRef(null),
        trajectory: useRef(null)
    }
    const changePosition = (name: string): void => {
        const ref = sectionsRef[name];
        if (!ref || !ref.current) return;
        //console.log(ref.current.getBoundingClientRect()); esto puede servir para el scroll
        ref.current.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/${name}`);
    }

    useEffect(() => {
        const handlePositionSection = () => {
            console.log(location);
        }
        document.addEventListener('DOMContentLoaded',handlePositionSection);

        return () => document.removeEventListener('DOMContentLoaded', () => { });
    }, [])
    return <NavigatorScrollContext.Provider value={{ sectionsRef, changePosition }}>
        {children}
    </NavigatorScrollContext.Provider>
}
export const UseNavigatorScroll = () => {
    const context = useContext(NavigatorScrollContext);
    if (!context) throw new Error("NavigatorScrollProvider is not loaded");
    return context;
};