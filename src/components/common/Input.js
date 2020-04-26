import React, { Component } from 'react'
import '../../css/input.css'

export default class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }

    this.changeInput = this.changeInput.bind(this)
  }

  render() {
    return (
      <label className="ipt-label">
        <input
          className="ipt-base"
          value={this.props.selectItem}
          onChange={ this.changeInput }
        />
      </label>
    )
  }

  changeInput (e) {
    this.setState({
      inputValue: e.target.value
    })
    this.props.getInput(e.target.value)
  }

}