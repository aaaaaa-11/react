import React, { Component } from 'react';

class Animation extends Component {
  constructor () {
    super()
    this.state = { 
      show: true
     }
  }
  
  render() { 
    return ( 
      <div>
        <div>
          <button onClick={this.toggleShow.bind(this)}>点击</button>
        </div>
        <div className={this.state.show ? 'show' : 'hide'}>文字</div>
      </div>
     );
  }

  toggleShow () {
    this.setState({
      show: !this.state.show
    })
  }
}
 
export default Animation;