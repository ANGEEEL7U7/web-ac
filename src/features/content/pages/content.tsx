import { lazy } from "react";

const PresentationLazy = lazy(() => import('@features/presentation').then(module =>
    ({ default: module.Presentation })
))

const Content = () => {
    return <main>
        <PresentationLazy />
        <article>
            mas cosas
        </article>
    </main>
}

export default Content;
