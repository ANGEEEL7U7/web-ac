import React, { ReactNode } from "react";
import Footer from './footer/footer';
import Header from "./header/header";

const Layout = (
    { children }: { children: ReactNode }
) => <React.Fragment>
    <Header /> {children} <Footer />
</React.Fragment>
export default Layout;