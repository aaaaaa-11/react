import React, { Component } from 'react'
import Button from './Button';

const ThemeContext = React.createContext('light')
export default class Children extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  static contextType = ThemeContext

  render () {
    return (
      <div>
        <h1>Children</h1>
        <Button theme={this.context} />
      </div>
    )
  }
}