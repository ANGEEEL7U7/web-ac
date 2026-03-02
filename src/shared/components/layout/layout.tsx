import React, { ReactNode } from "react";
import Footer from './components/footer/footer';
import Header from "./components/header/header";

const Layout = (
    { children }: { children: ReactNode }
) => <React.Fragment>
    <Header /> {children} <Footer />
</React.Fragment>
export default Layout;