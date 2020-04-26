import React, { Component } from 'react'
import '../../css/input.css'

export default class Select extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selectOption: 'default'
        }

        this.changeSelect = this.changeSelect.bind(this)
    }

    render() {
      return (
        <select
          value={ this.state.selectOption }
          onChange={ this.changeSelect }
          // name={this.state.selectOption }
        >
          { this.props.list.map((item, i) => <option
                value={item.value}
                key={i}
              >{item.cnValue}</option>)
          }
        </select>
      )
    }

    changeSelect (e) {
      let target = e.target
      let t = this
      t.setState({
        selectOption: target.value
      // }, function () {
      //   console.log(target.name);
      }, function () {
        t.props.getSelect(target.value)
      })
    }
}