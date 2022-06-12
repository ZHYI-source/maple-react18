import React from 'react';
import CommentBoard from "../../../components/commentBoard/commentBoard";

import './articleDetail.scss'

//文章详情
const ArticleDetail = () => {
    return (
        <section className='article-detail-box'>
            <div className='article-comments'>
                <CommentBoard/>
            </div>
        </section>
    );
};

export default ArticleDetail;