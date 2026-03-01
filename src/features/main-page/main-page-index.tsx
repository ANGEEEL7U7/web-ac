import React, { lazy } from "react";

const PresentationLazy = lazy(() => import('@features/presentation').then(
    module => ({ default: module.Presentation })
))

const MainPageIndex = (): React.ReactNode => <main>
    <article>
        <PresentationLazy />
        <section>
            mas cosas
        </section>
    </article>
</main>

export default MainPageIndex;
