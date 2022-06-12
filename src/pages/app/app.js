import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import './app.scss'
import Header from "./moudel/header/header";
import Logo from "../../assets/logo.png";
import {Avatar, BackTop, Button, Drawer} from "antd";
import RightBar from "./moudel/rightBar/rightBar";
import {relativeSize} from "tailwindcss/lib/util/dataTypes";
import MenuList from "../../components/menuList/menuList";
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
    const [visible,setVisible]=useState(false)
    //打开菜单
    const openMenu = ()=>{
        setVisible(true)
    }
    const onClose = ()=>{
        setVisible(false)
    }
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
                                 <Avatar className='primary-logo' src="https://joeschmoe.io/api/v1/random" />
                                 <span className='page-name'>HOME</span>
                            </span>
                            <span className='header-icon' onClick={openMenu}>
                                ✨
                            </span>
                        </div>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </section>
                <section className="sidebarColumn">
                    <RightBar/>
                </section>
            </section>
        {/*    右侧抽屉*/}
            <Drawer title="Maple" width={255} placement="right" onClose={onClose} visible={visible}>
               <MenuList onClose={onClose}/>
            </Drawer>
        </section>
    );
}


export default App;
