import React from 'react';
import ReactDOM from 'react-dom';
import jsonData from './newpneumonia.json'

console.log(jsonData)
let root = document.getElementById('root')



class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

ReactDOM.render(
  <List />,
  root
)