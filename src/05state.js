import React from 'react';
import ReactDOM from 'react-dom';
import './03style.css'

let root = document.getElementById('root')

class Clock extends React.Component {
  constructor (props) {
    super(props)
    // 状态(数据) -> 视图
    // 构造函数初始化，将需要改变的数据放到state中初始化
    this.state = {
      time: new Date().toLocaleTimeString()
    }
    this.getCurrentTime = this.getCurrentTime.bind(this)
  }

  // 生命周期函数，组件渲染完成
  componentDidMount() {
    // 切勿直接修改state数据，直接修改state数据不会重新渲染内容，应该使用setState
    setInterval(this.getCurrentTime, 1000);
  }

  render () {
    return (
      <div>
        <h1>当前时间：{this.state.time}</h1>
      </div>
    )
  }

  getCurrentTime() {
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }
}

ReactDOM.render(
  <Clock />,
  root
)