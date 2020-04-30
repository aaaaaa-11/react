import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Child from './Child'

export default class ComponentWithErrorBoundary extends Component {
  render () {
    return (
      <div>
        <h1>This is a component with Error Boundaries.</h1>
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>
      </div>
    )
  }

}