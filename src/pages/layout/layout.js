import React, {Component} from 'react';
import {Outlet} from "react-router-dom";
import LayoutHeader from "./moudel/layout-header";
import {Divider} from "antd";
class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <section>
                    <LayoutHeader/>
                </section>
                <Divider/>
                <section>
                    <Outlet/>
                </section>
            </div>
        );
    }
}


export default Layout;
