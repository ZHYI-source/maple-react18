import React from 'react';
import ReactDOM from 'react-dom/client';
//引入公共样式
import './styles/index.scss';
import Main from "./main/index";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>
);

