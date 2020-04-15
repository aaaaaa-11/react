import React from 'react';
// import HelloWorld from './components/HelloWorld'
import './css/base.css'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date().toLocaleString()
    }
    this.showDate = this.showDate.bind(this)
  }

  componentDidMount () {
    this.showDate()
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  render () {

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

function App() {
  
  return (
    <div>
      {/* <HelloWorld user={['Sara', 'Jerry', 'Ben']} /> */}
      <Clock />
    </div>
  );
}

export default App;
