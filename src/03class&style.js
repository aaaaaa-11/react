import React from 'react';
import ReactDOM from 'react-dom';
import './03style.css'

let root = document.getElementById('root')
 
let exampleStyle = {
  backgroundColor: 'skyblue',
  borderBottom: '3px solid #ccc'
}

let classStr = ['colorPink', 'margin10'].join(" ")
let element = (
  <div>
    <h1 style={exampleStyle}>title</h1>
    <h2 style={{height: '200px', boxShadow: '0 0 10px 5px #ccc'}}>subutitle</h2>
    <p className="bgRed">hhh</p>
    <p className={classStr}>text</p>
    <p className={'abc ' + classStr}>some text</p>
    <p style={{"background-color": "red"}}>hhhh</p>
  </div>
)

ReactDOM.render(
  element,
  root
)