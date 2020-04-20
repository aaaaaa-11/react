import React, { Component } from 'react';

export default class Personal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  render () {
    return (
      <div className="personal-index">
        <h1 className="personal-header">个人中心
          <span className="personal-h-setting">设置
            <i className="personal-h-s-icon"></i>
          </span>
        </h1>
        <div className="personal-content">
          <ul className="personal-c-list">
            <li className="personal-c-l-item">姓名：
              <span>{this.state.user.name}</span>
            </li>
            <li className="personal-c-l-item">昵称：
              <span>{this.state.user.nikname}</span>
            </li>
            <li className="personal-c-l-item">手机号：
              <span>{this.state.user.phone}</span>
            </li>
            <li className="personal-c-l-item">留言：
              <span>{this.state.user.msg}</span>
            </li>
          </ul>
        </div>
        <div className="personal-footer"></div>
      </div>
    )
  }
}