import React from 'react';
import './copyright.scss'
import {useSelector} from "react-redux";
const Copyright = () => {
    let runTimeInterval = useSelector((state) => state.system.runTimeInterval)
    return (
        <section className='copyright'>
            <ul>
                <li>Copyright ©2022 </li>
                <li>by<a href="https://gitee.com/Z568_568"> @书中枫叶 </a>.</li>
                <li> All rights reserved. | <a
                    href="https://beian.miit.gov.cn/#/Integrated/index">黔ICP备2022001745号-1</a></li>
                <li>本站已运行：{runTimeInterval}</li>
            </ul>
            <ul>
                <li>Copyright ©2022 </li>
                <li>by<a href="https://gitee.com/Z568_568"> @书中枫叶 </a>.</li>
                <li> All rights reserved. | <a
                    href="https://beian.miit.gov.cn/#/Integrated/index">黔ICP备2022001745号-1</a></li>
                <li>本站已运行：{runTimeInterval}</li>
            </ul>
            <ul>
                <li>Copyright ©2022 </li>
                <li>by<a href="https://gitee.com/Z568_568"> @书中枫叶 </a>.</li>
                <li> All rights reserved. | <a
                    href="https://beian.miit.gov.cn/#/Integrated/index">黔ICP备2022001745号-1</a></li>
                <li>本站已运行：{runTimeInterval}</li>
            </ul>
            <ul>
                <li>Copyright ©2022 </li>
                <li>by<a href="https://gitee.com/Z568_568"> @书中枫叶 </a>.</li>
                <li> All rights reserved. | <a
                    href="https://beian.miit.gov.cn/#/Integrated/index">黔ICP备2022001745号-1</a></li>
                <li>本站已运行：{runTimeInterval}</li>
            </ul>
        </section>
    );
};

export default Copyright;