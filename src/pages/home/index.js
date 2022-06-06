import React, {useState} from 'react';
import './home.scss'
import Logo from '../../assets/logo.png'
import {Divider} from "antd";

const Index = () => {
   let {arr,setArr}=useState([1,2,3,4,5,6])
    return (
        <section className='post-list'>
            <section className='post-item'>
                <div className="item-left">
                    <img alt='logo' src={Logo}/>
                </div>
                <div className='item-body'>
                    <div className='body-header'>
                        <span className='author'> @书中枫叶🍁 · </span>
                        <span className="date">2022-02-25 12:50</span>
                    </div>
                    <div className='body-post'>
                        <div className='post-title'>
                            忘记明天的日子
                        </div>
                        <Divider dashed/>
                        <div className='post-content'>
                            Statements of actor Salman Khan and his father Salim Khan have been recorded by Mumbai Police after the actor received a threat letter yesterday, June 5. Statements of a total of 4 people have been recorded so far: Mumbai Police
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Index;
