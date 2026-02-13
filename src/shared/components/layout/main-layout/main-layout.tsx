import { ReactNode } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const MainLayout = (
    { children }: { children: ReactNode }
) => <div className="min-h-screen">
        <Header />
        {children}
        <Footer />
    </div>
export default MainLayout;