import React, { Component } from 'react';
import { formatDetailDate } from '../js/formatDate'

export default class Comment extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="cmts-item">
        <div className="cmts-item-l">
          <img className="cmts-item_avat" src={ this.props.user.avatar || require("../img/logo192.png")} alt="avatar" />
          <p className="cmts-item_name">{ this.props.user }</p>
        </div>
        <div className="cmts-item-r">
          <p className="cmts-item_time">{formatDetailDate(new Date())}</p>
          <p className="cmts-item_p">{ this.props.comment }</p>
        </div>
      </div>
    )
  }
}