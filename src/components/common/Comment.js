import React, { Component } from 'react';
import NoCmt from './Nocomment'
import CmtItem from './CommentItem'

export default class Comment extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    if (this.props.cmtLists.length)
      return (
        <div>
          <p>当前有{this.props.cmtLists.length}条评论</p>
          { this.props.cmtLists.map((item, i) => <CmtItem key={item+i} {...item} />) }
        </div>
      )
    else
      return <NoCmt />
  }
}