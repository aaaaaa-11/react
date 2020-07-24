import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let root = document.getElementById('root')
class Clock extends Component {
  constructor () {
    super()
    // 状态（数据） -> 视图
    // 构造函数初始化数据，将需要的数据初始化到state中
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  // 生命周期函数
  componentDidMount () {
    setInterval(() => {
      // 不要直接修改数据，而是使用setState
      // 通过this.setState修改完数据后，并不会立即修改DOM里面的内容
      // React会在这个函数使用setState设置状态改变后，统一对比虚拟DOM对象，然后再统一修改，提升性能
      // 小程序也是借鉴React状态管理操作
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  render () {
    return (
      <div>
        <p>当前时间：{this.state.time}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  root
)
