import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

let bgRed = 'bgRed'
let logo = 'https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'

let date = new Date().toLocaleTimeString()
let str = '当前时间是：'
let content = 0
let element2 = (
  <div>
    {/* HTML的样式类名为className */}
    <h1 className={bgRed}>小标题</h1>
    <section>
      <p>段落1</p>
      <img src={logo} alt="logo" />
      <p>段落2</p>
    </section>
  </div>
)

let element3 = (
  <p className="bgGray">没有更多了～</p>
)
let element = (
  <div>
    <h1>Hello World</h1>
    <h2>{1 + 1}</h2>
    <h3>{str + date}</h3>
    <div>
      <button onClick={changeContent()}>改变内容</button>
      {content ? element2 : element3}
    </div>
  </div>
)

function changeContent() {
  content = !content
  console.log(content);
}

ReactDOM.render(
  element,
  document.getElementById('root')
)