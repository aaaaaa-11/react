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

function Tip (props) {
  return <div>
    <p className="win">恭喜玩家<span className="bold">{props.winner}</span>获胜</p>
  </div>
}

let tip = null, next

export default class Game extends React.Component {
  constructor () {
    super ()
    this.state = {
      square: [ // 棋盘，默认每格为空
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      player: 'X', // 默认 先下'X'
      endGame: 'false', // 标记 结束游戏
      winner: null, // 获胜者
      count: 0, // 记录下了几个棋子（下完结束）
      history: new Array(9).fill(null)
    }
    this.clickItem = this.clickItem.bind(this)
  }

  componentWillMount () {
    next = <h3 className="title">Next player: {this.state.player}</h3>
  }

  render () {
    return (
      <div>
        <div className="container">
          {next}
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

        {tip}

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
      
      player = player === 'X' ? 'O' : 'X'
      if (this.checkWin(square, index, innerIdx)) {
        this.setState({
          endGame: 'true',
          winner: player
        })
        tip = <Tip winner={player} />
        next = <h3 className="title">Game Over!</h3>
      } else if (count === 8) { // 如果下完棋子，没有人获胜，结束游戏
        this.setState({
          endGame: 'true',
        })
        next = <h3 className="title">Game Over!</h3>
      }
      
    })
  }

  // 检查游戏 是否结束
  //    如果 某一行 || 某一列 || 对角线 上的棋子完全一样，则获胜-返回true，否则返回false
  checkWin (square, index, innerIdx) {
    if (square[index][0] === square[index][1] && square[index][1] === square[index][2]) {
      return true
    } else if (square[0][innerIdx] === square[1][innerIdx] && square[1][innerIdx] === square[2][innerIdx]) {
      return true
    } else if (square[0][0] === square[1][1] && square[1][1] === square[2][2] && square[2][2] !== null) {
      return true
    } else if (square[0][2] === square[1][1] && square[1][1] === square[2][0] && square[2][0] !== null) {
      return true
    } else {
      return false
    }
  }
}