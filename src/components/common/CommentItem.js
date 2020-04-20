import React, { Component } from 'react';
import '../../css/comment.css'

export default class CmtItem extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="cmts-item">
        <div className="cmts-item-l">
          <img className="cmts-item_avat" src={ this.props.user.avatar || require("../../img/logo192.png")} alt="avatar" />
          <p className="cmts-item_name">{ this.props.user }</p>
        </div>
        <div className="cmts-item-r">
          <p className="cmts-item_time">{item.cmtTime}</p>
          <p className="cmts-item_p">{ item.comment }</p>
        </div>
      </div>
    )
  }
}