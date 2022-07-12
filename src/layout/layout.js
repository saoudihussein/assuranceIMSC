import React from 'react';
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const Layout = ({ children }) => {
    return (
        <>
            <HeaderComponent />
                {children}
            <FooterComponent />
        </>
    )
}

export default Layout;

