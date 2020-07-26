import React from 'react';
import ReactDOM from 'react-dom';
import './06style.css'

let root = document.getElementById('root')

// 在父组件中使用state去控制子元素props 
class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="child">
          <form action="http://www.baidu.com/">
            <div className="child">
              <h1>Hello World</h1>
              {/* 使用es6箭头函数传参 */}
              <button onClick={(e) => {this.parentOnclickHandler1("123", e)}}>submit</button>
              {/* 不适用ES6，传参 */}
              <button onClick={function(e) {this.parentOnclickHandler1("123", e)}.bind(this)}>submit</button>
            </div>
          </form>
          Hello World
        </div>
      </div>
    )
  }

  parentOnclickHandler = (e) => {
    e.preventDefault();
    
    console.log(e)
  }
  parentOnclickHandler1 = (val, e) => {
    e.preventDefault();
    
    console.log(val, e)
  }

}

ReactDOM.render(
  <Parent />,
  root
)