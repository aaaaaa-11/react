import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ServeMenuItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.delete = this.delete.bind(this)
  }
  
  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.item !== this.props.item) {
      return true
    } else {
      return false
    }
    // return nextProps.item !== this.props.item // 根据 子组件 是否 发生变化 执行接下来的 钩子函数
  }

  // 组件第一次存在于DOM中，函数不会被执行
  // 如果已经存在于DOM中，函数才会被执行
  // componentWillReceiveProps () {
  //   console.log('child - componentWillReceiveProps');
  // }

  // componentWillUnmount () {
  //   console.log('child - componentWillUnmount');
  // }

  render() { 
    // console.log('child render');
    return ( 
      <li
        // dangerouslySetInnerHTML={{__html: item}}
      >
        {this.props.avaName}竭诚为您服务 - {this.props.item}
        <span className="delete" onClick={this.delete}>删除</span>
      </li>
     );
  }

  // 点击 删除
  delete (index) {
    this.props.deleteItem(this.props.index)
  }
}

ServeMenuItem.propTypes = {
  avaName: PropTypes.string.isRequired, // 必传
  item: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
 
export default ServeMenuItem;