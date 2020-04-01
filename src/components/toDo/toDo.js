import React from 'react'

export default class ToDo extends React.Component {
  constructor () {
    super ()
    this.state = {
      count: 1,
      text: '',
      list: []
    }
    this.changeCount = this.changeCount.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  render () {
    return <div>
      <h3>TODO</h3>
      <ul>
        {this.state.list.map(item => <li key={item.id}>
          {item.text}
        </li>)}
      </ul>
      <p>What needs to de done?</p>
      {/* <input onChange={this.changeInput} />
      <button onClick={() => this.changeCount}>Add #{this.state.count}</button> */}
    </div>
  }

  // changeCount () {
  //   this.setState(state => {
  //     list: state.list.push({ id: state.count, text: state.text })
  //     count: state.count ++
  //   })
  // }

  // changeInput (e) {
    // this.setState(state => {
    //   text: e.target.value
    // })
  // }
}