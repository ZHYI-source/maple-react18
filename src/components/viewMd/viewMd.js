import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown' //https://github.com/remarkjs/react-markdown
import rehypeHighlight from 'rehype-highlight' //代码高亮
import remarkGfm from 'remark-gfm' //表格等编译
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import './viewMd.scss'


const ViewMd = () => {
    const [articleDetail,setArticleDetail]=useState('')
    const [escapeHtml,setEscapeHtml]=useState(false)
    const markdown = `
## 学习笔记：React父子组件通信

**1.父传子**
<br/>

http://localhost:3000/#heading-0

- 方法：**props** 函数  单向数据流，只能渲染，不能修改

 \`\`\`javascript

# Father组件a

import React, {Component} from 'react';

class Father extends Component {
    state={
        arr:[1,2,3],
        obj:{name:'son',age:12},
        num:98,
        str:'Son组件'
    }
    render() {
        return (
            <div>
                //eg:整个state传给子组件 SonB
                <SonB state={this.state}/>
            </div>
        );
    }
}

export default Father;

# Son组件

import React, {Component} from 'react';

class SonB extends Component {
    const { state:{ arr,obj,num,str } } = this.props //解构 props

    render() {
        return (
            <div>
                <p>{str}</p>
             // do something...
            </div>
        );
    }
}

export default SonB;

\`\`\`

---

**2.子传父**
<br/>

> import React, {Component} from 'react';

- 方法：子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入即可

 \`\`\`javascript

# Son组件

import React, {Component} from 'react';

class SonB extends Component {
    const { getSonMsg } = this.props //解构 props
    render() {
        return (
            <div>
                <button onClick={()=>getSonMsg('Son组件的消息')}></button>
            </div>
        );
    }
}

export default SonB;
    
# Father组件

import React, {Component} from 'react';

class Father extends Component {
    //定义一个传递给子组件的函数
    getSonMsg=(val)=>{
        console.log('我是子组件传来的：', val) //我是子组件传来的：Son组件的消息
    }
    
    render() {
        return (
            <div>
                <SonB getSonMsg={getSonMsg}/>
            </div>
        );
    }
}

export default Father;

\`\`\`

| Head | Head | Head | Head | Head | Head |
| --- | --- | --- | --- | --- | --- |
| Data | Data | Data | Data | Data | Data |
| Data | Data | Data | Data | Data | Data |

`
    return (
        <section className='view-md-box'>
            <MarkNav
                className="article-menu"
                source={markdown}
                headingTopOffset={80}
            />
            <ReactMarkdown
                           className='rendMd'
                           rehypePlugins={[rehypeHighlight,remarkGfm]}
                           children={markdown}
                           >
            </ReactMarkdown>
        </section>
    );
};

export default ViewMd;