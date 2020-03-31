import React, { Component } from 'react';

class ServeMenuItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.delete = this.delete.bind(this)
  }

  render() { 
    return ( 
      <li
        // dangerouslySetInnerHTML={{__html: item}}
      >
        {this.props.item}
        <span className="delete" onClick={this.delete}>删除</span>
      </li>
     );
  }

  // 点击 删除
  delete (index) {
    this.props.deleteItem(this.props.index)
  }
}
 
export default ServeMenuItem;