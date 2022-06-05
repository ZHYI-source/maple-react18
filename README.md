# maple-react

[![code style: prettier](https://img.shields.io/badge/start-56-red)](https://github.com/prettier/prettier)


这是一个使用 create-react-app创建的 React 脚手架<br/>
标准的 React+Redux 分层结构<br/>
重拾React知识，将不停的更新和优化本项目。

**技术栈及版本信息**

```javascript
    "node-sass": "^7.0.1",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
```

## 构建 Start

``` 
npm install		# 安装依赖模块

npm run start		# 运行开发环境: http://localhost:8888
npm run build		# 正式打包，用于生产环境
npm run eject		# 列出隐藏webpack配置文件

```
 

## 目录结构 Structure

```
.
├── build				# 正式打包后，会自动生成该文件夹，其中会包含最终用于生产环境的文件
│   ├── dist				# 编译后的资源文件
│   ├── icons				# 编译后自动生成的各尺寸favicon图标，有的会用于PWA配置
│   ├── asset-manifets.json		# 记录了将会被缓存的资源
│   ├── index.html			# 编译后的主页html
│   ├── manifest.json			# PWA配置文件，配置了桌面图标，以APP方式启动时的启动页面相关参数
│   └── service-worker.js		# PWA核心worker, 用于离线访问，缓存不变的资源文件
├── mock				# mock测试数据
├── public				# 静态文件，index.html等
├── src                                 # 项目代码目录
│   ├── component                     # 所有的公共类UI组件
│   ├── container                     # 所有的页面级容器组件
|	├── ...
|   	└── router			# 根组件，里面配置了顶级的路由
|   ├── models				# 模块（包含store数据/reducers/actions）
│   ├── assets                          # 所有的图片、文件等静态资源
│   ├── styles                          # 所有的样式文件
│   ├── store                           # store数据中心
│   ├── root                            # 根页
│   ├── store                           # store数据中心
│   ├── util                            # 自定义工具
│   ├── index.js                        # 项目入口JS
│   └── index.html                      # 主页html文件,开发环境和生产打包共用
├── server.js				# 用于开发环境的服务部署
├── webpack.dev.config.js		# 用于开发环境的webpack配置
└── webpack.production.config.js	# 用于生产环境正式打包的webpack配置
└── setupProxy.js                       # 代理中间件
```

## 预览地址 Demo

<a href="http://www.zhouyi.run" target="_blank">" 书中枫叶 "</a>