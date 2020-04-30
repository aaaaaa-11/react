import React, { Component } from 'react'

export default class Child extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      err: false
    }

    this.addbtn = () => {
      // try {
        // if (this.state.count === 2) {
        //   throw new Error('Has Error')
        // }
        this.setState({
          count: this.state.count + 1
        })
      // } catch (err) {
      //   this.setState({
      //     err: true
      //   })
      //   console.log(err);
      // }
    }
  }

  render () {
    if (this.state.count === 2) {
      throw new Error('I crashed!')
    }
    // if (this.state.err) {
    //   return <h1>has an error</h1>
    // }
    return (
      <div>
        <p>If there is no error, this will be show.</p>
        <div>{this.state.count}</div>
        <button onClick={this.addbtn}>click</button>
      </div>
    )
  }
}