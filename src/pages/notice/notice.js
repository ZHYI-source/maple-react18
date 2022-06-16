import React, {useEffect, useState} from 'react';
import {Alert, Button} from "antd";
import {connect, useDispatch, useSelector} from "react-redux";
import {Counter} from "../../components/counter";
import { setIsLoading } from '../../store/models/counterSlice'
import Marquee from "react-fast-marquee";

const Notice = () => {
    const dispatch = useDispatch()
    function getVuex (){
        dispatch(setIsLoading({msg:'后会过去不如风斗将来',isL:false}))
    }

    let [count, setCount] = useState(0);
    function getCount (){
        setCount(count+=1)
    }
    //默认副作用
    useEffect(()=>{
        console.log("默认副作用")
    },[])

    //count 变化后执行的副作用
    useEffect(()=>{
        console.log("ok--count 变化后执行的副作用")
    },[count])

    return (
        <div>
            <Button type='primary' onClick={getCount}>增加count</Button>

            <h3>{count}</h3>

            <Button type='primary' onClick={getVuex}>触发Redux方法</Button>
            <Counter/>
            <div className='home-notice'>
                <Alert
                    banner
                    message={
                        <Marquee pauseOnHover gradient={false}>
                            I can be a React component, multiple React components, or just some text.
                        </Marquee>
                    }
                />
            </div>

            文章列表

            <h3>推荐</h3>

        </div>
    );
};

let select = (state) => {
    return {
        type: state.type
    }
}
export default connect(select)(Notice);