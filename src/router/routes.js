import _import from '../utils/util.import'

const Layout = _import('layout/layout')
const Home = _import('home/index')
const NotFound = _import('404/notFound')

//路由结构表
const mainRoutesList = [
    {
        path: '/',
        element: <Layout/>,
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
