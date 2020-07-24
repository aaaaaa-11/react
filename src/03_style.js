import React from 'react';
import ReactDOM from 'react-dom';
import './style_03.css';

let examleStyle = {
  backgroundColor: 'skyblue',
  borderBottom: '1px solid red'
}
let classStr = 'redBG'
let classArr = ['redBg', 'abc']
let element = (
  <div>
    {/* 注释 */}
    <h1 style={{color: '#444', boxShadow: '0 0 5px 0px #333', ...examleStyle}}>标题</h1>
    <section className={classStr + ' aaa'}>
      写点东西
      <p className={classArr.join(' ')}>哈哈哈</p>
    </section>
  </div>
)


ReactDOM.render(
  element,
  document.getElementById('root')
)