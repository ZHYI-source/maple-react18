import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Divider, Popover} from "antd";
import {CommentOutlined, EyeOutlined, LikeOutlined} from "@ant-design/icons";
import SelfIntroduction from "../../components/selfIntroduction/selfIntroduction";
import Copyright from "../../components/copyright/copyright";
import './home.scss'
import {dirArticle} from "../../api/article";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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

    const goRouter = (path) => {
        navigate(path)
    }

    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState({ //查询推荐并且按是否顶置查询
        params: {
            isRecommend: true
        },
        limit: 10,//每页条数
        offset: 1,//当前页
        sort: {
            prop: 'isTop',
            order: 'desc',
        }
    });

    function getDataList() {
        dirArticle(query).then(res => {
            setArticles(res.data);
        })
    }

    useEffect( () => {
        getDataList()
    },[]);
    return (
        <section className='post-list'>
            {/*自我介绍*/}
            <SelfIntroduction/>
            <div className='home-post-class'>
                <h3 className='home-post-h'>🪐 推荐</h3>
            </div>
            <Divider/>
            {
                articles.map((item) => {
                    return <NavLink to={{ pathname : `/articleDetail`, state : { id: item.id}}} key={item.id} >
                        <article className='post-item'  >
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
                                    {item.article_title}
                                </div>
                                <div className='post-content'>
                                    {item.article_summary}
                                </div>
                            </div>
                            <div className='body-opt'>
                                <div className='opt-item'>
                                    <CommentOutlined/> {item.commentsCount}
                                </div>
                                <div className='opt-item'>
                                    <EyeOutlined/> {item.viewsCount}
                                </div>
                                {/*<div className='opt-item'>*/}
                                {/*    <LikeOutlined/> {item.viewsCount}*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </article>
                    </NavLink>
                })
            }
        </section>
    );
};

export default Home;
