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
      isLogin: true,
    }
  }

  render() {
    let element = null;
    if (this.state.isLogin) {
      element = <UserGreet />
    } else {
      element = <UserLogin />
    }

    return (
      <div>
        <h1>Title</h1>
        {element}
        <h1>三元运算符操作：</h1>
        {this.state.isLogin ? <UserGreet /> : <UserLogin />}
        <h1>Footer</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Parent />,
  root
)