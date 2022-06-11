import React from 'react';
import {Button} from "antd";
import {connect, useDispatch, useSelector} from "react-redux";
import {Counter} from "../../components/counter";
import { setIsLoading } from '../../store/models/counterSlice'

const Notice = () => {
    const dispatch = useDispatch()
    function getVuex (){
        dispatch(setIsLoading({msg:'后会过去不如风斗将来',isL:false}))
    }
    return (
        <div>
            <Button type='primary' onClick={getVuex}>触发Redux方法</Button>
            <Counter/>
        </div>
    );
};

let select = (state) => {
    return {
        type: state.type
    }
}
export default connect(select)(Notice);