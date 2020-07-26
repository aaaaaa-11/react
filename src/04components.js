import React from 'react';
import ReactDOM from 'react-dom';
import './03style.css'

let root = document.getElementById('root')
 
// 函数式组件
function ChildCmp (props) {
  let title = <h2>subtitle</h2>

  // console.log('props.weather', props.weather)

  let weather = props.weather
  // 条件判断
  let isGO = weather === "rainy" ? "No" : "Yes"

  return (
    <div>
      <h1>Hello World</h1>
      {title}

      <div>
        go out ?
        <span>{isGO}</span>
      </div>
    </div>
  )
}

// let weather = "sunny"
// 类组件
class HelloWorld extends React.Component {
  render () {
    return (
      <div>
        <h1>HelloWorld</h1>
        <ChildCmp weather={this.props.weather} />
      </div>
    )
  }
}

ReactDOM.render(
  <HelloWorld weather={"rainy"} />,
  root
)