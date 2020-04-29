import React, { Component } from 'react'
import Child from './Child'
import { CityContext } from './city-context'
import { ThemeContext } from './theme-context'

export default class MiddleComponent extends Component {
  render () {
    let self = this
    return (
      <div>
        <h3>Middle</h3>
        <CityContext.Consumer>
          {city => (
            <ThemeContext.Consumer >
              {theme => (
                // <Child city={city} theme={theme}/>
                <Child city={city} theme={theme} changeCity={self.props.changeCity} changeTheme={self.props.changeTheme} />
              )}
            </ThemeContext.Consumer>
          )}
        </CityContext.Consumer>
        <h3>Middle</h3>
      </div>
    )
  }
}
