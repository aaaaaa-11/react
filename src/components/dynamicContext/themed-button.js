import React, { Component } from 'react'
import { ThemeContext } from './theme-context'

class ThemedButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    const theme = this.context || {}
    return (
      <button onClick={this.props.changeTheme}
        style={{ 
          backgroundColor: theme.backgroundColor,
          color: theme.color
        }}
      >{this.props.children}
      </button>
    )
  }
}
ThemedButton.contextType = ThemeContext

export default ThemedButton