import React, { Component } from 'react'
import { CityContext, CityList } from './city-context'
import { ThemeContext, themes } from './theme-context'
import MiddleComponent from './MiddleComponent'

export default class Contexts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      city: CityContext._currentValue,
      theme: 'dark'
    }

    this.changeCity = () => this.setState(state => ({
      city: state.city === CityContext._currentValue ? CityList[0][CityList[1][2]] : CityContext._currentValue
    }))
    this.changeTheme = () => this.setState(state => ({
      // theme: 'light'
      theme: state.theme === 'dark' ? 'light' : 'dark'
    }))
  }
  render () {
    return (
      <div style={{
        backgroundColor: themes[this.state.theme].backgroundColor,
        color: themes[this.state.theme].color
      }}>
        <h1>Contexts</h1>
        <div>
          <p>city: {this.state.city}</p>
          <p>theme: {this.state.theme}</p>
        </div>
        <CityContext.Provider value={this.state.city}>
          {/* <p>{this.state.city_id + '-------' + City[0][City[1][this.state.city_id]]}</p> */}
          <ThemeContext.Provider value={this.state.theme}>
            <MiddleComponent changeCity={this.changeCity} changeTheme={this.changeTheme} />
          </ThemeContext.Provider>
        </CityContext.Provider>
      </div>
    )
  }
}