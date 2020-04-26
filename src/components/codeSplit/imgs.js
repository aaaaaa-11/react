import React, { Component } from 'react'

export default class Imgs extends Component {
  render () {
    return (
      <div>
        {new Array(100).fill(null).map((item, i) => <img alt="img" key={i} src="../../img/logo192.png" />)}
      </div>
    )
  }
}