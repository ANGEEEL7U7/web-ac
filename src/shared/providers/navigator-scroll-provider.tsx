import React, { createContext, useContext, useRef } from "react";

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

        ref.current.scrollIntoView({behavior:'smooth'});
    }

    return <NavigatorScrollContext.Provider value={{ sectionsRef, changePosition }}>
        {children}
    </NavigatorScrollContext.Provider>
}
export const UseNavigatorScroll = () => {
  const context = useContext(NavigatorScrollContext);
  if(!context) throw new Error("NavigatorScrollProvider is not loaded");    
  return context;
};