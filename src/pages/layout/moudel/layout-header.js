import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
class LayoutHeader extends Component {
    render() {
        return (
            <div>
                <NavLink to='/' style={ (isActive) => ({color: isActive ? 'red' : '#28cd00'}) }>首页</NavLink>
                <NavLink to='/sonA' style={ (isActive) => ({color: isActive ? 'red' : '#28cd00'}) }>A组件</NavLink>
                <NavLink to='/demo' style={ (isActive) => ({color: isActive ? 'red' : '#28cd00'}) }>demo</NavLink>
            </div>
        );
    }
}

export default LayoutHeader;
