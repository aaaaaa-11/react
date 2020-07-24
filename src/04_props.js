import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style_03.css';

// 函数式组件
function Child (props) {
  let title = <h2>副标题</h2>
  let weather = props.weather
  // 条件判断
  let goOut = weather === "大雨" ? "出" : "不出"
  
  console.log('props:', props);
  return (
    <div>
      <h1>函数式组件</h1>
      {title}
      <div>
        是否出门 ? <span>{goOut}</span>
      </div>
    </div>
  )
}

// 类组件
class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1>类组件</h1>
        <p>Hello, {this.props.name}</p>
        <Child weather={this.props.weather} />
      </div>
    )
  }
}

ReactDOM.render(
  <HelloWorld weather={"大雨"} name={"小黑"}/>,
  document.getElementById('root')
)