import React, { Component } from 'react'

export default class Button extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <button>{this.props.theme}</button>
      </div>
    )
  }
}