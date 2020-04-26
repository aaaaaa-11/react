import React, { Component } from 'react'

export default class Children extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <div>Just for test.</div>
        <div>
          <p>hhh</p>
          <div>test
            {this.props.children}
            test
          </div>
        </div>
      </div>
    )
  }
}