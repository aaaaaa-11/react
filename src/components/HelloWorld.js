import React, { Component } from 'react';
import '../css/comment.css';
import Comment from './common/Comment';
import { formatDetailDate } from '../js/formatDate'
import Input from './common/Input'
import Select from './common/select'
import Calc from './common/Calc'
// import NoCmt from './common/Nocomment';

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

// let tip

export default class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cmtLists: [],
      cmtText: "把想说的写下来吧...",
      selectItem: 'default',
      list: [
        { id: 0, value: "default", cnValue: "请选择" },
        { id: 1, value: "zhangsan", cnValue: "张三" },
        { id: 2, value: "lisi", cnValue: "李四" },
        { id: 3, value: "wangwu", cnValue: "王五" },
        { id: 4, value: "zhaoliu", cnValue: "赵六" }
      ]
    }
    this.comment = this.comment.bind(this)
    this.writeCmt = this.writeCmt.bind(this)
    this.goAbout = this.goAbout.bind(this)
  }

  render () {
    // if (this.state.cmtLists.length) {
    //   tip = <p>当前有{this.state.cmtLists.length}条评论</p>
    // } else {
    //   tip = <NoCmt />
    // }
    return (
      <div>
        <Calc />
        <Input selectItem={this.state.selectItem} getInput={this.getInput.bind(this)} />
        <Select list={this.state.list} getSelect={this.getSelect.bind(this)} />
        <div className="cmt-wrapper">
          <p className="cmt-tip">写下您的评论：</p>
          <textarea className="cmt-content" onMouseLeave={this.mouseLeave.bind(this, this.state.cmtText)} onMouseEnter={this.mouseEnter} onChange={this.writeCmt} placeholder={this.state.cmtText} />
          <button className="cmt-btn" onClick={this.comment}>发表评论</button>
        </div>
        <div className="cmts-wrapper">
          <h3 className="cmts-title">评论区</h3>
          <div className="cmts-content">
            <Comment cmtLists={this.state.cmtLists} />
          </div>
        </div>
        <div className="footer">
          <p>版权：xxxxx</p>
          <a href="/" onClick={this.goAbout}>关于我们</a >
        </div>
      </div>
    )
  }

  getInput (val) {
    this.setState({
      selectItem: val
    })
  }

  getSelect (val) {
    this.setState({
      selectItem: val
    })
  }

  /* 实验性语法 */
  mouseEnter = (e) => {
    e.target.className = "cmt-content hight-light"
  }
  
  mouseLeave (value, e) {
    // if (value.length < 1) {
    //   alert('快写，犹豫什么！')
    // } else if (e.target.value.length < 2) {
    //   alert('能不能多写几个字？')
    // }
    e.target.className = "cmt-content border-grey"
  }

  comment () {
    let cmtObj = {
      user: new Date().getTime().toString(32),
      avatar: '',
      cmtTime: formatDetailDate(new Date()),
      comment: this.state.cmtText
    }, cmtLists = this.state.cmtLists
    cmtLists.push(cmtObj)
    this.setState({
      cmtLists,
      cmtText: "把想说的写下来吧..."
    })
  }

  writeCmt (e) {
    this.setState({
      cmtText: e.target.value
    })
  }

  goAbout (e) {
    e.preventDefault()
    console.log('测试阻止默认事件');
  }
}