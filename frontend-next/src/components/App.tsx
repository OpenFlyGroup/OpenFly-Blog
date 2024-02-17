"use client";
import { IDefaultLayout } from "@/types/layout/layout.interface";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";

const App: React.FC<Readonly<IDefaultLayout>> = ({ children }) => {

  return (
    <>
        <AppHeader />
        <main className="flex-1 py-6">{children}</main>
        <AppFooter />
    </>
  );
};

export default App;