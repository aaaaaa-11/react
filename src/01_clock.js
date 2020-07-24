import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// JSX语法
// <App /> ：JS普通对象
/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */
// let app = <App />
// let root = document.getElementById('root')

// let h1 = <h1>Hello World<span>副标题</span></h1>;

// ReactDOM.render(h1, root);

let root = document.querySelector('#root')

// setInterval(clock(), 1000)

// 实现页面时刻展示
/* function clock() {
  let time = new Date().toLocaleString()
  let element = (
    <div>
      <h1>现在的时间是{time}</h1>
      <div>
        <h3>副标题</h3>
        <p>这里有一些内容
          <span>注释</span>
        </p>
      </div>
    </div>
  )
  ReactDOM.render(element, root)
} */

setInterval(run, 1000)
function run() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    root
  )
}

// React函数式组件
function Clock(props) {
  return (
    <div>
      <h1>现在的时间是{props.date.toLocaleString()}</h1>
      <div>
        <h3>副标题</h3>
        <p>这里有一些内容
          <span>注释</span>
        </p>
      </div>
    </div>
  )
}
