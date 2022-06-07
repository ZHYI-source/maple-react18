// import react, react-markdown-editor-lite, and a markdown parser you like
import React from 'react';
import * as ReactDOM from 'react-dom';
import MarkdownIt from 'markdown-it';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);
const plugins = [
    'header',
    'font-bold',
    'font-italic',
    'font-underline',
    'font-strikethrough',
    'list-unordered',
    'list-ordered',
    'block-quote',
    'block-wrap',
    'block-code-inline',
    'block-code-block',
    'table',
    'image',
    'link',
    'clear',
    // 'logger',
    'mode-toggle',
    'full-screen',
    'tab-insert'
];
// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}
function renderHTML(text) {
    // 使用 markdown-it
    return mdParser.render(text);
}
//图片上传
function onImageUpload(file) {
    console.log(file)
    // const reader = new FileReader();
    // reader.onload = data => {
    //     resolve(data.target.result);
    // };
    // reader.readAsDataURL(file);
}
const MdEdit = () => {

    return (
        <div>
            <MdEditor style={{ height: '300px' }}
                      plugins={plugins}
                      renderHTML={renderHTML}
                      onImageUpload={onImageUpload}
                      onChange={handleEditorChange} />
        </div>
    );
}

export default MdEdit;
// https://github.com/HarryChen0506/react-markdown-editor-lite/blob/b7f32d3e6be67e2203c0404995a2a6a5d8ad8fd7/docs/configure.zh-CN.md