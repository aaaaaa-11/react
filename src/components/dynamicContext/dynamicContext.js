import React, { Component } from 'react'
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

function MiddleComponent (props) {
  return (
    <ThemedButton changeTheme={props.changeTheme}>Change Theme</ThemedButton>
  )
}

export default class DynamicContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    }
    this.changeTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.light ? themes.dark : themes.light
      }))
    }
  }

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <MiddleComponent changeTheme={this.changeTheme} />
        </ThemeContext.Provider>
      </div>
    );
  }

}