import { UseNavigatorScroll } from "@shared/providers";
import React, { lazy } from "react";

const PresentationLazy = lazy(() => import('@features/presentation').then(
    module => ({ default: module.Presentation })
))

const MainPageIndex = (): React.ReactNode => {
    const { sectionsRef } = UseNavigatorScroll();
    return <main>
        <PresentationLazy />
        <section ref={sectionsRef['profile']} className="h-200">
            mas cosas
        </section>
        <section ref={sectionsRef['skill']} className="h-200">
            mas cosas
        </section>
        <section ref={sectionsRef['trajectory']} className="h-200">
            mas cosas
        </section>
    </main>;
}

export default MainPageIndex;
