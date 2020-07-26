import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

let root = document.getElementById('root')

// let app = <App />

// ReactDOM.render(
//   <React.StrictMode>
//     {app}
//   </React.StrictMode>,
//   root
// );

// 实现页面时刻显示的时间
// function clock () {
//   let time = new Date().toLocaleTimeString()
//   let element = (
//     <div>
//       <h1>title</h1>
//       <h2>subtitle</h2>
//       <h3>现在是{time}</h3>
//     </div>
//   )

//   ReactDOM.render(element, root)
// }

// setInterval(clock, 1000);


// react函数式组件
function Clock (props) {
  return (
        <div>
          <h1>title</h1>
          <h2>subtitle</h2>
          <h3>现在是{props.time.toLocaleString()}</h3>
        </div>
      )
}

function run () {
  ReactDOM.render(
    <Clock time={new Date()} />,
    root
  )
}

setInterval(run, 1000);
