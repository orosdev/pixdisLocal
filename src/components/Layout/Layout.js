import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import {styles} from './styles';

const Layout = ({children}) => {

    return (
        <div style={styles.layoutContainer}>
            <div style={styles.mainContainer}>
                <Sidebar/>
                <div style={styles.container}>
                    <Header/>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;
