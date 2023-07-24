import {ReactElement} from "react";
import Header from "./header.tsx";

type LayoutProps = {
    children: ReactElement
}
export default function Layout({children}: LayoutProps) {
    return (
        <>
            <Header/>
            <div className="container mx-auto content-center">
                {children}
            </div>
        </>
    )
}