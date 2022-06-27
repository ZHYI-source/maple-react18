import React, {useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {Affix, Avatar, BackTop, Divider, Drawer, Input} from "antd";
import Header from "./moudel/header/header";
import RightBar from "./moudel/rightBar/rightBar";
import MenuList from "../../components/menuList/menuList";
import HeaderSearch from "./moudel/headerSearch/headerSearch";
import './app.scss'
import PrimaryTop from "./moudel/primaryTop/primaryTop";
import Copyright from "../../components/copyright/copyright";
import {Provider} from "react-redux";

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
    const [visible, setVisible] = useState(false)
    //打开菜单
    const openMenu = () => {
        setVisible(true)
    }
    const onClose = () => {
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
                <div className="main-body">
                    <section className="primaryColumn">
                        <PrimaryTop openMenu={openMenu}  onClose={onClose}/>
                        <div>
                            {/*路由内容渲染*/}
                            <Outlet/>
                        </div>
                    </section>
                    <section className="sidebarColumn">
                        <RightBar/>
                    </section>
                </div>
                <Divider/>
                {/* 版权以及系统运行*/}
                <Copyright/>
            </section>
            {/*    右侧抽屉*/}
            <Drawer title="Maple" width={255} placement="right" onClose={onClose} visible={visible}>
                <MenuList onClose={onClose}/>
            </Drawer>
        </section>
    );
}


export default App;
