import React from 'react';
import {Outlet} from "react-router-dom";
import './app.scss'
import Header from "./moudel/header/header";
import Logo from "../../assets/logo.png";

const App = () => {
    return (
        <section className="app">
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
                        <div className='header-logos'>
                           <img alt='logo' src={Logo}/>
                        </div>
                        <div className='header-input'>
                            <textarea value="What's happening?"/>
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
