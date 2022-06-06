import React from 'react';
import {Outlet} from "react-router-dom";
import './app.scss'
import Header from "./moudel/header/header";
import Logo from "../../assets/logo.png";
import {BackTop} from "antd";
const style = {
    height: 30,
    width: 30,
    lineHeight: '30px',
    borderRadius: 4,
    backgroundColor: '#ff0000',
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
};
const App = () => {
    return (
        <section className="app">
            <BackTop>
                <div style={style}>TOP</div>
            </BackTop>
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
