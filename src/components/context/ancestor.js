import React, { Component } from 'react'
import Parent from './parent'

const ThemeContext = React.createContext('light')
export default class Context extends Component {
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
          <ThemeContext.Provider value="dark">
              <Parent />
            </ThemeContext.Provider>
        </div>
      </div>
    )
  }
}