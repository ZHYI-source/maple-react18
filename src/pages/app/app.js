import React from 'react';
import {Outlet} from "react-router-dom";
import './app.scss'
import Header from "./moudel/header/header";
import Logo from "../../assets/logo.png";
import {BackTop} from "antd";
import RightBar from "./moudel/rightBar/rightBar";
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
                    <div style={{paddingTop:'50px'}}>
                        <Outlet/>
                    </div>
                </section>
                <section className="sidebarColumn">
                    <RightBar/>
                </section>
            </section>
        </section>
    );
}


export default App;
