import React, { Component } from 'react'
import { CityList } from './city-context'
import { themes } from './theme-context'

export default class Child extends Component {
  render () {
    // console.log(CityContext, CityList, ThemeContext);
    return (
      <div>
        <h3>Child</h3>
        <div>city: {this.props.city}
          <button onClick={this.props.changeCity}>change city</button>
        </div>
        <div>theme: {this.props.theme}
          <button onClick={this.props.changeTheme}>change theme</button>
        </div>
        <h3>Child</h3>
      </div>
    )
  }
}
