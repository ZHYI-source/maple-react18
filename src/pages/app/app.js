import React from 'react';
import {Outlet} from "react-router-dom";
import './app.scss'
import Header from "./moudel/header/header";
import Logo from "../../assets/logo.png";
import {BackTop} from "antd";

const App = () => {
    return (
        <section className="app">
            <BackTop />
            <section className="headerColumn">
                <Header/>
            </section>
            <section className="main">
                <section className="primaryColumn">
                    <div className='primary-top'>
                        <div className='primary-header'>
                            <span className='header-title'>
                                HOME
                            </span>
                            <span className='header-icon'>
                                ✨
                            </span>
                        </div>
                    </div>
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
