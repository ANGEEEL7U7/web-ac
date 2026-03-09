import React from "react";
import { Layout } from '@shared/components/'


const Presentation = React.lazy(() => import('@features/presentation').then(
    module => ({ default: module.Presentation })
))

const MainPage = (): React.ReactNode => {
    return <Layout>
        <main>
            <Presentation />
            <section data-item-scrolling="profile" className="h-200">
                mas cosas pp
            </section>
            <section data-item-scrolling="skill" className="h-200">
                mas cosas ssss
            </section>
            <section data-item-scrolling="trajectory" className="h-200">
                mas cosas ttt
            </section>
        </main>
    </Layout>;
}

export default MainPage;
