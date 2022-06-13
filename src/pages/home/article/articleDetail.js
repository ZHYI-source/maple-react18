import React from 'react';
import CommentBoard from "../../../components/commentBoard/commentBoard";
import ViewMd from "../../../components/viewMd/viewMd";
import './articleDetail.scss'

//文章详情
const ArticleDetail = () => {

    return (
        <section className='article-detail-box'>
            <div className='article-detail-header'>
                    文章标题
            </div>
            <div className='article-detail-body'>
                <ViewMd/>
            </div>
            <div className='article-comments'>
                <CommentBoard/>
            </div>
        </section>
    );
};

export default ArticleDetail;