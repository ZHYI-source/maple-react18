import React, {useState} from 'react';
import './home.scss'
import Logo from '../../assets/logo.png'
import {Alert, Button, Divider, Popover} from "antd";
import MdEdit from "../../components/mdEdit/mdEdit";
import {CommentOutlined, EyeOutlined, LikeOutlined, SendOutlined, SubnodeOutlined} from "@ant-design/icons";
import Marquee from 'react-fast-marquee';
import {useNavigate} from "react-router-dom";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const avt = 'https://joeschmoe.io/api/v1/random'


const Home = () => {

    const [visible, setVisible] = useState(false);
    const navigate = useNavigate()
    const hide = () => {
        setVisible(false);
    };
    const handleVisibleChange = (newVisible) => {
        setVisible(newVisible);
    };

    const goRouter=(path)=>{
        navigate(path)
    }

    return (
        <section className='post-list'>
            {/*主页发布*/}
            <article className='post-item post-edit'>
                <div className="item-left">
                    <img alt='logo' src={Logo}/>
                </div>
                <div className='item-body'>
                    <MdEdit/>
                    <div className='pub-opt'>
                        <Button type='primary' className='opt-btn' shape="round" icon={<SendOutlined/>}>Publish</Button>
                        <Button type='info' className='opt-btn' shape="round" icon={<SubnodeOutlined/>}>Draft</Button>
                    </div>
                </div>
            </article>
            {
                arr.map((item) => {
                    return <article className='post-item' key={item} onClick={()=>{goRouter('/articleDetail')}}>
                        <div className="item-left">
                            <img alt='logo' src={avt}/>
                        </div>
                        <div className='item-body'>
                            <div className='body-header'>
                                <div>
                                    <span className='author'> @书中枫叶🍁 · </span>
                                    <span className="date">2022-02-25 12:50</span>
                                </div>
                                <Popover
                                    content={<div><span onClick={hide}>修改</span><span onClick={hide}>删除</span></div>}
                                    placement="topRight"
                                    title='操作'
                                    trigger="click"
                                    visible={visible}
                                    onVisibleChange={handleVisibleChange}
                                >
                                    <span className="more">···</span>
                                </Popover>
                            </div>

                            <div className='body-post'>
                                <div className='post-title'>

                                    忘记明天的日子
                                </div>
                                <div className='post-content'>
                                    Statements of actor Salman Khan and his father Salim Khan have been recorded by
                                    Mumbai Police after the actor received a threat letter yesterday, June 5. Statements
                                    of a total of 4 people have been recorded so far: Mumbai Police
                                </div>
                            </div>
                            <div className='body-opt'>
                                <div className='opt-item'>
                                    <CommentOutlined/> 32
                                </div>
                                <div className='opt-item'>
                                    <EyeOutlined/> 99+
                                </div>
                                <div className='opt-item'>
                                    <LikeOutlined/> 99+
                                </div>

                            </div>
                        </div>
                    </article>
                })
            }
        </section>
    );
};

export default Home;
