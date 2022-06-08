import React, {useState} from 'react';
import {Avatar, Input, List} from "antd";
import Search from "antd/es/input/Search";
import './rightBar.scss'

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
const onSearch = (value) => console.log(value);
const RightBar = () => {
    return (
        <section className='right-bar'>
            <div className='search-box'>
                <Input
                    placeholder="输入博文标题搜索"
                    allowClear
                    onSearch={onSearch}
                    style={{
                        height: 40,
                        width: '100%',
                        fontSize: 12
                    }}
                />
            </div>
            <div className='right-bar-content'>
                <div className='content-list'>
                    <h2>What’s happening</h2>
                    <div className='list-items'>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                                        title={<a href="http://www.zhouyi.run/#/">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
                <nav className='right-footer'>
                    <ul>
                        <li>Copyright ©2022 </li>
                        <li>by<a href="https://gitee.com/Z568_568"> @书中枫叶 </a>.</li>
                        <li> All rights reserved. | <a
                            href="https://beian.miit.gov.cn/#/Integrated/index">黔ICP备2022001745号-1</a></li>
                    </ul>

                </nav>
            </div>
        </section>
    );
}

export default RightBar;