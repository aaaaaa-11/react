import React, { Component } from 'react'
import Error from './Error'

let hasError = null
export default class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      err: null,
      errInfo: null,
    }
  }

  static getDerivedStateFromError(err) {
    // console.log('get');
    return hasError = <Error />
  }

  componentDidCatch (err, errInfo) {
    // console.log('catch')
    this.setState({
      err: err,
      errInfo: errInfo
    })
  }

  render () {
    if (hasError) {
      return (
        <div>
          <h1>Has Error</h1>
          <div>
            {hasError}
          {this.state.err && this.state.err.toString()}
            <br />
            {this.state.errInfo && this.state.errInfo.componentStack}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}