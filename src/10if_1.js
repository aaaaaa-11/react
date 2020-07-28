import React from 'react';
import ReactDOM from 'react-dom';

let root = document.getElementById('root')

function UserGreet(props) {
  return (
    <h1>Welcome sign in</h1>
  )
}

function UserLogin(props) {
  return <h1>Please sign up first</h1>
}

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }

  render() {
    // if (this.state.isLogin) {
    //   return <UserGreet />
    // } else {
    //   return <UserLogin />
    // }
    return this.state.isLogin ? <UserGreet /> : <UserLogin />
  }
}

ReactDOM.render(
  <Parent />,
  root
)