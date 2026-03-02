import React, { lazy } from "react";

const PresentationLazy = lazy(() => import('@features/presentation').then(
    module => ({ default: module.Presentation })
))

const MainPageIndex = (): React.ReactNode => <main>
    <PresentationLazy />
    <section>
        mas cosas
    </section>
</main>

export default MainPageIndex;
