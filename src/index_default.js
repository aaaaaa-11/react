import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style_06.css'

let root = document.getElementById('root')

class Tab extends Component {
  constructor () {
    super() 
    // 设置状态、数据
    this.state = {
      s1: "",
      s2: ""
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent.bind(this, 1)}>内容一</button>
        <button onClick={this.clickEvent.bind(this, 2)}>内容二</button>
        <div>
          <section className={this.state.s1}>
            <h1>内容一</h1>
          </section>
          <section className={this.state.s2}>
            <h1>内容二</h1>
          </section>
        </div>
      </div>
    )
  }

  clickEvent (i, e) {
    if (i===1) {
      this.setState({
        s1: "section active",
        s2: "section"
      })
    } else {
      this.setState({
        s1: "section",
        s2: "section active"
      })
    }
  }
}

ReactDOM.render(
  <Tab />,
  root
)
