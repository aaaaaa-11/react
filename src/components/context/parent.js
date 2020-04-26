import React, { Component } from 'react'
import Children from './children'

export default class Parent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <h1>Parent</h1>
        <Children />
      </div>
    )
  }
}