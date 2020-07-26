import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
let root = document.getElementById('root')

// let time = new Date().toLocaleTimeString()
// let str = '当前时间是：'
// let element = (
//   <div>
//     <h1>Hello World</h1>
//     <h2>{1 + 1}</h2>
//     <p>{str + time}</p>
//   </div>
// )

// let man = '发热'
// let element2 = (
//   <div>
//     <h4>是否隔离？</h4>
//     <p>{man === '发热' ? <button>隔离</button> : '躺'}</p>
//   </div>
// )

// let man = '正常'

// let element4 = (
//   <div>
//     <span>横着躺</span>
//     <span>竖着躺</span>
//   </div>
// )
// let element3 = (
//   <div>
//     <h4>是否隔离？</h4>
//     <div>{man === '发热' ? <button>隔离</button> : element4}</div>
//   </div>
// )

let element5 = (
  // HTML的样式类名要写className，因为class在js当中是关键词
  <div className='bgRed'>红色背景
  <img src='https://www.baidu.com/img/dong_66cae51456b9983a890610875e89183c.gif' alt="logo" />
  </div>
)

ReactDOM.render(
  element5,
  root
)