import React, {useEffect} from 'react';
import CommentBoard from "../../../components/commentBoard/commentBoard";
import ViewMd from "../../../components/viewMd/viewMd";
import './articleDetail.scss'
import {useLocation, useParams} from "react-router-dom";

//文章详情
const ArticleDetail = (props) => {
    const loc = useLocation()
    const locs = useParams()
    useEffect(()=>{
        console.log(loc)
        console.log(locs)
    },[])
    return (
        <section className='article-detail-box'>
            <div className='article-detail-header'>
                    文章标题
            </div>
            <div className='article-detail-body'>
                <ViewMd/>
            </div>
            {/*<div className='article-comments'>*/}
            {/*    <CommentBoard/>*/}
            {/*</div>*/}
        </section>
    );
};

export default ArticleDetail;