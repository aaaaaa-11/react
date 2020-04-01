import React from 'react'
import '../../css/index.css'

class Item extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.showClick = this.showClick.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.player !== this.props.player)
      return true
    else
      return false
  }

  render () {
    return <div className='item' onClick={this.showClick}>
      { this.props.player }
  </div>
  }

  showClick () {
    this.props.clickItem(this.props.index, this.props.innerIdx)
  }
}

export default class Game extends React.Component {
  constructor () {
    super ()
    this.state = {
      square: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      player: 'X',
      endGame: 'false',
      winner: null,
      count: 0
    }
    this.clickItem = this.clickItem.bind(this)
  }

  render () {
    return (
      <div>
        <div className="container">

          <h3 className="title">Next player: {this.state.player}</h3>
          
          {
            this.state.square.map((item, index) => {
              return (
                <div key={index} className='row'>
                  {item.map((innerItem, innerIdx) => <Item
                  key={index * 3 + innerIdx}
                  player={this.state.square[index][innerIdx]}
                  index={index}
                  innerIdx={innerIdx}
                  clickItem={this.clickItem} 
                />)}
                </div>
              )
            })
          }

        </div>

        <p className="win">恭喜玩家<span className="bold">{this.state.winner}</span>获胜</p>

      </div>
    )
  }

  clickItem (index, innerIdx) {
    if (this.state.endGame === 'true') return
    // 每次点击完，改变 state.square 对应的元素值 和 state.player值
    let square = this.state.square,
        player = this.state.player,
        count = this.state.count
    square[index][innerIdx] = player
    player = player === 'X' ? 'O' : 'X'
    this.setState({
      square: square,
      player: player,
      count: count + 1
    }, () => {
      if (count === 8) {
        this.setState({
          endGame: 'true',
          winner: 'o'
        })
      }
      player = player === 'X' ? 'O' : 'X'
      if (square[index][0] === square[index][1] && square[index][1] === square[index][2]) {
        this.setState({
          endGame: 'true',
          winner: player
        })
      } else if (square[0][innerIdx] === square[1][innerIdx] && square[1][innerIdx] === square[2][innerIdx]) {
        this.setState({
          endGame: 'true',
          winner: player
        })
      } else if (square[0][0] === square[1][1] && square[1][1] === square[2][2] && square[2][2] !== null) {
        this.setState({
          endGame: 'true',
          winner: player
        })
      } else if (square[0][2] === square[1][1] && square[1][1] === square[2][0] && square[2][0] !== null) {
        this.setState({
          endGame: 'true',
          winner: player
        })
      }
    })
  }
}