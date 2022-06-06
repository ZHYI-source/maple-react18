import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./moudel/header";
import {Divider} from "antd";

const App = () => {
    return (
        <div className="app">
            <section>
                <Header/>
            </section>
            <Divider/>
            <section>
                <Outlet/>
            </section>
        </div>
    );
}


export default App;
