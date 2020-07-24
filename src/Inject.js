import React from 'react'

const title = "title in inject"
export default function Inject(Component) {
  return class Injector extends React.Component {
    render () {
      return (
        <Component title={title} />
      )
    }
  }
}