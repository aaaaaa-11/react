import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

class Animation extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      show: true
    }
    this.toggleShow = this.toggleShow.bind(this)
  }
  
  shouldComponentUpdate (nextProps, nextState) {
    return nextState.show !== this.state.show
  }

  render() { 
    return ( 
      <div>
        <div>
          <button onClick={this.toggleShow}>点击</button>
        </div>
        {/* <div className={this.state.show ? 'show' : 'hide'}>文字</div> */}
        <CSSTransition
          in={this.state.show}
          timeout={2000}
          classNames="test"
          unmountOnExit
        >
          <div>文字</div>
        </CSSTransition>
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