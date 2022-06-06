import React, {useState} from 'react';
import './home.scss'
import Logo from '../../assets/logo.png'
import {Divider} from "antd";
import RichEdit from "../../components/richEdit";

const Index = () => {
   let {arr,setArr}=useState([1,2,3,4,5,6])
    return (
        <section className='post-list'>
            <article className='post-item post-edit'>
                <div className="item-left">
                    <img alt='logo' src={Logo}/>
                </div>
                <div className='item-body'>
                     <RichEdit/>
                </div>
            </article>
            <article className='post-item'>
                <div className="item-left">
                    <img alt='logo' src={Logo}/>
                </div>
                <div className='item-body'>
                    <div className='body-header'>
                        <div>
                            <span className='author'> @书中枫叶🍁 · </span>
                            <span className="date">2022-02-25 12:50</span>
                        </div>
                        <span className="more">···</span>
                    </div>
                    <div className='body-post'>
                        <div className='post-title'>
                            忘记明天的日子
                        </div>
                        <div className='post-content'>
                            Statements of actor Salman Khan and his father Salim Khan have been recorded by Mumbai Police after the actor received a threat letter yesterday, June 5. Statements of a total of 4 people have been recorded so far: Mumbai Police
                        </div>
                    </div>
                </div>
            </article>
            <article className='post-item'>
                <div className="item-left">
                    <img alt='logo' src={Logo}/>
                </div>
                <div className='item-body'>
                    <div className='body-header'>
                        <div>
                            <span className='author'> @书中枫叶🍁 · </span>
                            <span className="date">2022-02-25 12:50</span>
                        </div>
                        <span className="more">···</span>
                    </div>
                    <div className='body-post'>
                        <div className='post-title'>
                            忘记明天的日子
                        </div>
                        <div className='post-content'>
                            Statements of actor Salman Khan and his father Salim Khan have been recorded by Mumbai Police after the actor received a threat letter yesterday, June 5. Statements of a total of 4 people have been recorded so far: Mumbai Police
                        </div>
                    </div>
                </div>
            </article>
            <article className='post-item'>
                <div className="item-left">
                    <img alt='logo' src={Logo}/>
                </div>
                <div className='item-body'>
                    <div className='body-header'>
                        <div>
                            <span className='author'> @书中枫叶🍁 · </span>
                            <span className="date">2022-02-25 12:50</span>
                        </div>
                        <span className="more">···</span>
                    </div>
                    <div className='body-post'>
                        <div className='post-title'>
                            忘记明天的日子
                        </div>
                        <div className='post-content'>
                            Statements of actor Salman Khan and his father Salim Khan have been recorded by Mumbai Police after the actor received a threat letter yesterday, June 5. Statements of a total of 4 people have been recorded so far: Mumbai Police
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Index;
