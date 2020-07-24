import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Context from './Context'

var context = { title: "title in TextComponent", maney: 20 }

const root = document.getElementById('root')

class TextComponent extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      maney: 10
    };
  }

  render () {
    return (
      <div>
        <p>maney: {this.state.maney}</p>
        <Context />
      </div>
    )
  }

  getChildContext = () => {
    console.log(context);
    return context;
  }

}

TextComponent.childContextTypes = {
  title: PropTypes.string,
  maney: PropTypes.number
}

ReactDOM.render( <TextComponent />, root)
