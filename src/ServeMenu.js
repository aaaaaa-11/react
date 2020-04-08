import React,{Component, Fragment} from 'react';
import ServeMenuItem from './ServeMenuItem'
import Animation from './Animation';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


import './style.css'
import axios from 'axios';

class ServeMenu extends Component {
  constructor () {
    super()
    this.state = {
      inputVal: '',
      list: [],
      avaName: '小爱'
    }
    this.changeInput = this.changeInput.bind(this)
    this.add = this.add.bind(this)
  }

  // componentWillMount () {
  //   console.log('componentWillMount --- 组件挂载前');
  // }

  componentDidMount () {
    // console.log('componentDidMount --- 组件挂载完成');
    axios.get('https://api.myjson.com/bins/18gsgk')
      .then((res) => {
        if (res.data.data) {
          this.setState({
            list: res.data.data
          })
        }
        console.log('请求成功');
      }).catch((err) => {
        console.log(err);
      });
  }

  // shouldComponentUpdate () {
  //   console.log('1. shoudComponentUpdate');
  //   return true
  // }

  // componentWillUpdate () {
  //   console.log('2. componentWillUpdate');
  // }

  // componentDidUpdate () {
  //   console.log('4. componentDidUpdate');
  // }

  // componentWillReceiveProps () {
  //   console.log('componentWillReceiveProps');
  // }

  render () {
    // console.log('3. render ----- 组件正在挂载');
    return (
      <Fragment>
        <div>
          <label htmlFor="serve">输入服务项：
            <input id="serve"
              className="input"
              onChange={this.changeInput}
              value={this.state.inputVal}
              ref={(input) => this.input = input}
            />
          </label>
          <button onClick={this.add} className="addItem">添加</button>
          
          <ul ref={(ul) => this.ul = ul}>
            <TransitionGroup>
              {
                this.state.list.map((item, index) => {
                  return (
                    <CSSTransition
                      timeout={2000}
                      classNames="test"
                      unmountOnExit
                      key={index+item}
                      appear={true}
                    >
                      <ServeMenuItem
                        deleteItem={this.deleteItem.bind(this,index)} 
                        key={item+index}
                        item={item} index={index}
                        avaName={this.state.avaName}
                      />
                    </CSSTransition>
                  )
                })
              }
            </TransitionGroup>
          </ul>

          <Animation />
        </div>
      </Fragment>
    )
  }

  // 改变输入框的值
  changeInput () {
    // this.setState({inputVal: e.target.value})
    this.setState({
      inputVal: this.input.value
    })
  }

  // 点击 添加
  add () {
    // 确保有输入值
    if (!this.state.inputVal.trim()) {
      return
    }
    this.setState({
      list: [this.state.inputVal, ...this.state.list],
      inputVal: ''
    // }, () => {
    //   console.log(this.ul.querySelectorAll('li').length);
    })
  }

  // 删除
  deleteItem (index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

}

export default ServeMenu