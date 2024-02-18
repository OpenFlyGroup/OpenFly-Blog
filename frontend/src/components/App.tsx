"use client";
import { IDefaultLayout } from "@/types/layout/layout.interface";
import { PrimeReactProvider } from 'primereact/api';
import AppHeader from "./layout/Header/AppHeader";
import AppFooter from "./layout/Footer/AppFooter";
import { twMerge } from 'tailwind-merge';

const App: React.FC<Readonly<IDefaultLayout>> = ({ children }) => {

  return (
    <PrimeReactProvider value={{ unstyled: true, pt: {}, ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge } }}>
        <AppHeader />
        <main className="flex-1 py-6">{children}</main>
        <AppFooter />
    </PrimeReactProvider>
  );
};

export default App;