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
    return (
      <div>
        <ul>
          {this.state.list.map(item => {
            return <li>
              <h3>title --- {item.title}</h3>
              <div>content ---- {item.content}</div>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <List />,
  root
)