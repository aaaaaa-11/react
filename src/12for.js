import React from 'react';
import ReactDOM from 'react-dom';

let root = document.getElementById('root')

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          title: 'first',
          content: 'content1'
        },
        {
          title: 'second',
          content: 'content2'
        },
        {
          title: 'third',
          content: 'content3'
        }
      ]
    }
  }

  render() {
    let listArr = []
    for (let i=0; i<this.state.list.length; i++) {
      let item = (
        <li key={i}>
          <h3>{this.state.list[i].title}</h3>
          <div>{this.state.list[i].content}</div>
        </li>
      )
      listArr.push(item)
    }
    return (
      <div>
        <ul>
          {listArr}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <List />,
  root
)