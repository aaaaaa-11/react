
import React from 'react'

export default class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date().toLocaleString()
    }
    this.showDate = this.showDate.bind(this)
  }

  componentDidMount () {
    this.showDate()
    console.log('did');
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
    console.log('willun');
  }

  render () {
    console.log('render');

    return (
      <div>
        <p>It is {this.state.date}.</p>
      </div>
    )
  }
  
  showDate () {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date().toLocaleString()
      })
    }, 1000)
  }
}