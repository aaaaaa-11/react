import React, { Component } from 'react';
import '../css/comment.css';
import Comment from '../components/Comment';

// function formatName (user) {
//   return user.firstName + ' ' + user.lastName
// }

// function Greeting (user) {
//   if (user) {
//     if (user.firstName) {
//       return <h1>Hello, {formatName(user)}!</h1>
//     }
//     return <h1>Hello, {user}</h1>
//   }
//   return <h1>Hello, stranger.</h1>
// }

// const styleObj = {
//   width: '200px',
//   height: '200px',
//   backgroundColor: '#ccc'
// }

// JSX语法：属性值可以是字面量
// 如果属性值是一个JS表达式，需要使用{}
// const element = <div data-index="1" style={styleObj}>JSX语法</div>

// const user = {
//   firstName: 'Jack',
//   lastName: 'Simith'
// }

export default class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cmtObj: {
        user: new Date().getTime().toString(32),
        avatar: '',
        comment: 'test'
      },
      cmtText: "把想说的写下来吧..."
    }
    this.comment = this.comment.bind(this)
    this.writeCmt = this.writeCmt.bind(this)
  }

  render () {
    return (
      <div>
        <div className="cmt-wrapper">
          <p className="cmt-tip">写下您的评论：</p>
          <textarea className="cmt-content" onChange={this.writeCmt} placeholder={this.state.cmtText} />
          <button className="cmt-btn" onClick={this.comment}>发表评论</button>
        </div>
        <div className="cmts-wrapper">
          <h3 className="cmts-title">评论区</h3>
          <div className="cmts-content">
            <Comment {...this.state.cmtObj} />
          </div>
        </div>
      </div>
    )
  }

  comment () {
    this.setState({
      cmtObj: {
        user: new Date().getTime().toString(32),
        avatar: '',
        comment: this.state.cmtText
      },
      cmtText: "把想说的写下来吧..."
    }, () => {
      // console.log(this.state.cmtText);
    })
  }

  writeCmt (e) {
    this.setState({
      cmtText: e.target.value
    })
  }
}