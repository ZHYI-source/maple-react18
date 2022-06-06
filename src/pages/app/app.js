import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./moudel/header";
import {Divider} from "antd";
import './app.scss'

const App = () => {
    return (
        <section className="app">
            <section className="headerColumn">
                11
            </section>
            <section className="main">
                <section className="primaryColumn">
                    <Outlet/>
                </section>
                <section className="sidebarColumn">
                    123
                </section>
            </section>
        </section>
    );
}


export default App;
