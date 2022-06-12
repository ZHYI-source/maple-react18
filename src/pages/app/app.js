import React, {useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {Avatar, BackTop, Drawer, Input} from "antd";
import Header from "./moudel/header/header";
import RightBar from "./moudel/rightBar/rightBar";
import MenuList from "../../components/menuList/menuList";
import HeaderSearch from "./moudel/headerSearch/headerSearch";
import './app.scss'
import PrimaryTop from "./moudel/primaryTop/primaryTop";

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
    const navigate = useNavigate()
    const goRouter = (path) => {
        navigate(path)
    }
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
                <section className="primaryColumn">
                    <PrimaryTop openMenu={openMenu} onClose={onClose}/>
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
