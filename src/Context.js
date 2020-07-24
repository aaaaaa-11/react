import React, { Component } from 'react'
import PropTypes from 'prop-types'

// function Title (props) {
//   let title = this.context.title
//   return <h1>{title}</h1>
// }

export default class Context extends Component {
  render () {
    console.log('this', this);
    return (
      <div>
        <h1>Context</h1>
        {/* <Title /> */}
      </div>
    )
  }
}

// Context.contextType = {
//   // title: PropTypes.string
//   maney: PropTypes.number
// }