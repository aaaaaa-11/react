import React from 'react';
import ReactDOM from 'react-dom';
import './06style.css'

let root = document.getElementById('root')

class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      c1: "",
      c2: ""
    }
  }

  render() {
    return (
      <div>
        <button data-index="1" onClick={this.onClickHandler}>content 1</button>
        <button data-index="2" onClick={this.onClickHandler}>content 2</button>
        <div className={this.state.c1}>
          <h1>content 1</h1>
        </div>
        <div className={this.state.c2}>
          <h1>content 2</h1>
        </div>
      </div>
    )
  }

  onClickHandler = (e) => {
    let index = e.target.dataset.index
    index === "1" ?
    this.setState({
      c1: "content active",
      c2: "content"
    })
    : this.setState({
      c1: "content",
      c2: "content active"
    })
  }
}

ReactDOM.render(
  <Tab />,
  root
)