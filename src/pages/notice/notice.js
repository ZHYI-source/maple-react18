import React from 'react';
import {Button} from "antd";

function getVuex (){
    console.log("okkk")
}
const Notice = () => {
    return (
        <div>
            <Button type='primary' onClick={getVuex}>触发Redux方法</Button>
        </div>
    );
};

export default Notice;