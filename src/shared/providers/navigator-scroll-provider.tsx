import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const listSections: string[] = import.meta.env.VITE_LIST_SECTIONS.split(',');

interface SectionRef {
    [key: string]: React.RefObject<HTMLElement | null>
}
export interface NavigatorScrollContextProps {
    sectionsRef: SectionRef
    sectionActive: string | null;
    changePosition: (name: string) => void;
}
interface NavigatorScrollProps { children: React.ReactNode };
const NavigatorScrollContext = createContext<NavigatorScrollContextProps | null>(null);

export const NavigatorScrollProvider = ({ children }: NavigatorScrollProps) => {
    const [sectionActive, setSectionActive] = useState<string | null>(null);

    const sectionsRef: SectionRef = Object.fromEntries(
        listSections.map(i => [i, useRef(null)])
    )
    const changePosition = (name: string): void => {
        const ref = sectionsRef[name];
        if (!ref || !ref.current) return;
        setSectionActive(name);
        ref.current.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/${name}`);
    }
    const handlePositionSection = () => {
        const positionPath = window.location.pathname.split('/')[1];
        if (!positionPath) return;
        changePosition(positionPath);
    }

    useEffect(handlePositionSection, [])
    return <NavigatorScrollContext.Provider value={{ sectionsRef, sectionActive, changePosition }}>
        {children}
    </NavigatorScrollContext.Provider>
}
export const UseNavigatorScroll = () => {
    const context = useContext(NavigatorScrollContext);
    if (!context) throw new Error("NavigatorScrollProvider is not loaded");
    return context;
};