import { ReactNode } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const Layout = (
    { children }: { children: ReactNode }
) => <div className="min-h-screen bg-body">
        <Header /> {children} <Footer />
    </div>
export default Layout;