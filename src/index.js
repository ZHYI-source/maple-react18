import React from 'react';
import ReactDOM from 'react-dom/client';
//引入公共样式
import './styles/index.scss';
import Main from "./main/index";
import {Provider} from "react-redux";
import store from './store/index'
import {Divider} from "antd";
import Copyright from "./components/copyright/copyright";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Main/>

        </Provider>,
    </React.StrictMode>
);

