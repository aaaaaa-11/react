import React from 'react';
import ReactDOM from 'react-dom';

let root = document.getElementById('root')

class Child extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {}
  }

  render() {
    if (this.props.isShow) {
      return (
        <div>
          <h2>Child</h2>
        </div>
      )
    } else {
      return null
    }
  }
}


// 在父组件中使用state去控制子元素props 
class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShowChild}>控制子元素显示</button>
        <Child isShow={this.state.isShow} />
      </div>
    )
  }

  toggleShowChild = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}

ReactDOM.render(
  <Parent />,
  root
)