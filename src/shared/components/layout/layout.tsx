import { ReactNode } from "react";
import Footer from './components/footer/footer';
import Header from "./components/header/header";

const Layout = (
    { children }: { children: ReactNode }
) => <div className="min-h-screen bg-body">
        <Header /> {children} <Footer />
    </div>
export default Layout;