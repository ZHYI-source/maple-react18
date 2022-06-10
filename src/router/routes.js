import _import from '../utils/util.import'
import Notice from "../pages/notice/notice";

const App = _import('app/app')
const Home = _import('home/index')
const NotFound = _import('404/notFound')

//路由结构表
const mainRoutesList = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true, //默认路由
                element: <Home/>,
                meta: {
                    title: '首页',
                    needLogin: true,
                    roleId: 10000,
                },
            },
            {   path: '/notice',
                element: <Notice/>,
                meta: {
                    title: '通知',
                    needLogin: true,
                    roleId: 10000,
                },
            },
        ],
    },
    {
        path: '*',
        element: <NotFound/>,
        meta: {
            title: '404',
            needLogin: true,
            roleId: 10000,
        },
    },

]

export default mainRoutesList;
