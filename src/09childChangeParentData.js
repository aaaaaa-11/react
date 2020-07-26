import React from 'react';
import ReactDOM from 'react-dom';
import './06style.css'

let root = document.getElementById('root')

class Child extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      data: 'data in child'
    }
  }

  render() {
    return (
      <div>
        <h1>Child</h1>
        <button onClick={this.changeParentData}>Click</button>
        <button onClick={this.props.changeParentData.bind(this, 'data in child')}>Click</button>
      </div>
    )
  }

  changeParentData = () => {
    // 将子元素值传递给父元素，实际上是调用父元素的函数
    this.props.changeParentData(this.state.data)
  }
}


// 在父组件中使用state去控制子元素props 
class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "data of parent"
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.data}</p>
        <Child changeParentData={this.changeParentData} />
      </div>
    )
  }

  changeParentData = (data) => {
    this.setState({
      data: data
    })
  }

}

ReactDOM.render(
  <Parent />,
  root
)