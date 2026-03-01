import { lazy } from "react";

const PresentationLazy = lazy(() => import('@features/presentation').then(module =>
    ({ default: module.Presentation })
))

const Content = () => {
    return <main>
        <article>
            <PresentationLazy />
            <section>
                mas cosas
            </section>
        </article>
    </main>
}

export default Content;
