<p align="center">
  <img  src="./public/logo.png" height="80" />
</p>
<h3 align="center"> " maple-react "</h3>
<p align="center">
这是一个使用 create-react-app创建的 React 脚手架<br/>
标准的 React+Redux 分层结构<br/>
重拾React知识，将不停的更新和优化本项目。
</p>
<p align="center">
  <a href="https://gitee.com/Z568_568/maple.git">
    <img src="https://gitee.com/Z568_568/all-blog-sys/badge/star.svg?theme=dark" alt="maintained with Ranger" />  
  </a>
  <a href="https://gitee.com/Z568_568/maple.git">
    <img src="https://gitee.com/Z568_568/all-blog-sys/badge/fork.svg?theme=dark" alt="MIT License"/>
  </a> 
<a href="https://gitee.com/Z568_568/maple.git">
    <img src="https://img.shields.io/badge/Star-99+-red" alt="maintained with Ranger" />  
  </a>
  <a href="https://gitee.com/Z568_568/maple.git">
    <img src="https://img.shields.io/badge/Fork-99+-green" alt="MIT License"/>
  </a>
</p>


**技术栈及版本信息**

```javascript
    "node-sass":"^7.0.1",
    "react":"^18.1.0",
    "react-dom":"^18.1.0",
    "react-redux":"^8.0.2",
    "redux":"^4.2.0",
    "react-router-dom":"^6.3.0",
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
├── build				        # 正式打包后，会自动生成该文件夹，其中会包含最终用于生产环境的文件
│   ├── dist				    # 编译后的资源文件
│   ├── icons				# 编译后自动生成的各尺寸favicon图标
│   ├── index.html			# 编译后的主页html
├── mock				        # mock测试数据
├── public				        # 静态文件，index.html等
├── src                                 # 项目代码目录
│   ├── components                     # 所有的公共类UI组件
│   ├── pages                     # 所有的页面级容器组件
|	├── ...
│   ├── assets                          # 所有的图片、文件等静态资源
│   ├── styles                          # 所有的样式文件
│   ├── store                           # store数据中心
│   ├── main                            # 根页目录
│   ├── router                          # 路由配置
│   ├── store                           # 状态管理
|   ├── ├── models                      # 模块（包含store数据/reducers/actions）
|   ├── ├── home.js                    # 状态管理主文件
│   ├── util                            # 自定义工具
│   ├── home.js                        # 项目入口JS
├── webpack.dev.config.js		# 用于开发环境的webpack配置
└── webpack.production.config.js	# 用于生产环境正式打包的webpack配置
└── setupProxy.js                       # 代理中间件
```

## 预览地址 Demo

<a href="http://www.zhouyi.run" target="_blank">" 书中枫叶 "</a>