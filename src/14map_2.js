import React from 'react';
import ReactDOM from 'react-dom';

let root = document.getElementById('root')

// function ListItem(props) {
//   return (
//     <li>
//       <h3>title --- {props.item.title}</h3>
//       <div>content ---- {props.item.content}</div>
//     </li>
//   )
// }

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <li
        onClick={this.onClickHandler.bind(
          this,
          this.props.index,
          this.props.item.title,
        )
      }>
        <h3>title --- {this.props.item.title}</h3>
        <div>content ---- {this.props.item.content}</div>
      </li>
    )
  }

  onClickHandler = (i, title, e) => {
    alert(i + 1 + '-' + title)
  }
}

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
          {this.state.list.map((item, i) => {
            return <ListItem key={i} index={i} item={item} />
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