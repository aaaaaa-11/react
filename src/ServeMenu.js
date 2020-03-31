import React,{Component, Fragment} from 'react';
import './style.css'
import ServeMenuItem from './ServeMenuItem'

class ServeMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputVal: '',
      list: ['智能客服', '人工客服']
    }
    this.changeInput = this.changeInput.bind(this)
    this.add = this.add.bind(this)
  }

  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor="serve">输入服务项：
            <input id="serve" className="input" onChange={this.changeInput} value={this.state.inputVal} />
          </label>
          <button onClick={this.add} className="addItem">添加</button>
          
          <ul>
            {
              this.state.list.map((item, index) => {
                return (
                  <ServeMenuItem deleteItem={this.deleteItem.bind(this,index)} key={item+index} item={item} index={index} />
                )
              })
            }
          </ul>
        </div>
      </Fragment>
    )
  }

  // 改变输入框的值
  changeInput (e) {
    this.setState({inputVal: e.target.value})
  }

  // 点击 添加
  add () {
    if (!this.state.inputVal.trim()) {
      return
    }
    this.setState({
      list: [this.state.inputVal, ...this.state.list],
      inputVal: ''
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