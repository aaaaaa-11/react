import React from 'react'

export const themes = {
  dark: {
    backgroundColor: '#333',
    color: '#fafafa'
  },
  light: {
    backgroundColor: '#f6f6f1',
    color: '#333'
  }
}

export const ThemeContext = React.createContext(
  themes.dark // 默认值
)
