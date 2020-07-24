import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')

class TextComponent extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      maney: 10
    };
    this.saveButtonRef = (btn => { this.btnRef = btn });
    [
      '_onClickHanler',
      '_onMouseLeaveHandler',
      '_onTimeoutHandler',
      '_onAjaxCallback'
    ].forEach(fun_name => {
      this[fun_name] = this[fun_name].bind(this)
    });
  }

  componentDidMount () {
    // this.btnRef.addEventListener('mouseleave', this._onMouseLeaveHandler)

    // setTimeout(() => {
    //   this._onTimeoutHandler()
    // }, 1000);

    fetch('https://api.github.com/users')
    .then(this._onAjaxCallback);
  }

  render () {
    console.log('start render', JSON.stringify(this.state));
    return (
      <button
        ref={this.saveButtonRef}
        onClick={this._onClickHanler}>click
      </button>
    )
  }

  _onClickHanler () {
    console.log('before _onClickHanler', JSON.stringify(this.state));
    this.setState({
      maney: this.state.maney + 10
    }, () => {
      console.log('callback of setState', JSON.stringify(this.state)); // 在 start render 之后
    })
    console.log('after _onClickHanler', JSON.stringify(this.state)); // 没有立即改变
  }

  _onMouseLeaveHandler () {
    console.log('before _onMouseLeaveHandler', JSON.stringify(this.state));
    this.setState({
      maney: this.state.maney + 20
    })
    console.log('after _onMouseLeaveHandler', JSON.stringify(this.state)); // 改变了
  }

  _onTimeoutHandler () {
    console.log('before _onTimeoutHandler', JSON.stringify(this.state));
    this.setState({
      maney: this.state.maney + 30
    })
    console.log('after _onTimeoutHandler', JSON.stringify(this.state)); // 改变了
  }

  _onAjaxCallback () {
    console.log('before _onAjaxCallback', JSON.stringify(this.state));
    this.setState({
      maney: this.state.maney + 50
    })
    console.log('after _onAjaxCallback', JSON.stringify(this.state)); // 改变了
  }
  
}


ReactDOM.render( <TextComponent />, root)
