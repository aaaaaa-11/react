import React, { Component } from 'react'
import Children from './children'

export default class PropsChildren extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Children>
          <div>some other content.</div>
        </Children>
      </div>
    )
  }
}