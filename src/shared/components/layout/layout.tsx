import React, { ReactNode } from "react";
import Footer from './footer/footer';
import Header from './header/header';
import { ChevronUp } from "lucide-react";
import { ScrollBehavior } from "@shared/hooks";

export default function Layout({ children }: { children: ReactNode }) {
    const [position] = ScrollBehavior();
    return <React.Fragment>
        <Header /> {children} <Footer />
        <button
            className={`
                fixed bottom-5 right-5 button icon transition duration-300 
                ${position > 300 ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ChevronUp />
        </button>
    </React.Fragment>
}