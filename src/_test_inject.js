import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Inject from './Inject'

function Title (props) {
  return <h1>{props.title}</h1>
}

const EnhancedTitle = Inject(Title)

const root = document.getElementById('root')

class TextComponent extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      maney: 10
    };
  }

  render () {
    return <EnhancedTitle />
  }

}


ReactDOM.render( <TextComponent />, root)
