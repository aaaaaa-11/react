import React, { Component } from 'react';

class Input1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputVal: ''
    }
    this.changeInput = this.changeInput.bind(this)
  }

  render () {
    return (
      <div>
        <input
          type="number"
          value={ this.props.inputVal }
          onChange={ this.changeInput }
        />米
      </div>
    )
  }

  changeInput (e) {
    this.setState({
      inputVal: e.target.value
    })
    this.props.getInput(e.target.value)
  }
}
class Input2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputVal: ''
    }
    this.changeInput = this.changeInput.bind(this)
  }

  render () {
    return (
      <div>
        <input
          type="number"
          value={ this.props.inputVal ? this.props.inputVal / 1000 : ''}
          onChange={ this.changeInput }
        />千米
      </div>
    )
  }

  changeInput (e) {
    this.setState({
      inputVal: e.target.value
    })
    this.props.getInput(e.target.value * 1000)
  }
}

export default class Calc extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputVal: 0
    }
    this.getInput = this.getInput.bind(this)
  }

  render () {
    return (
      <div>
        <Input1 inputVal={this.state.inputVal} getInput={this.getInput} />
        <Input2 inputVal={this.state.inputVal} getInput={this.getInput} />
      </div>
    )
  }

  getInput (val) {
    this.setState({
      inputVal: val
    })
  }
}
