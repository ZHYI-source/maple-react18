import React from 'react';
import {NavLink} from "react-router-dom";
import './header.scss'
import logo from '../../../../assets/logo.png'
import {Button} from "antd";

const Header = () => {
    return (
        // <NavLink to='/' style={(isActive) => ({color: isActive ? 'red' : '#28cd00'})}># Home</NavLink>
        <nav className="header-box">
            <div className='header-logo'>
                <img alt='logo' src={logo}/>
            </div>
            <div className='nav-item'>
                <span className='item-icon'>#</span>
                <span className='item-name'>Home</span>
            </div>
            <div className='nav-item'>
                <span className='item-icon'>#</span>
                <span className='item-name'>Notifications</span>
            </div>
            <div className='nav-item'>
                <span className='item-icon'>#</span>
                <span className='item-name'>List</span>
            </div>
            <div className='nav-item'>
                <span className='item-icon'>#</span>
                <span className='item-name'>More</span>
            </div>
            <Button type="primary" size='large' className='head-btn'>Tweet</Button>
        </nav>
    );
}

export default Header;
