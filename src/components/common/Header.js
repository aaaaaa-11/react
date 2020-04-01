import React from 'react'
import '../../css/base.css'

export default function Header (props) {
  function inputClick (e) {
    e.preventDefault(); // 貌似这个preventDefault没用
    console.log('e');
  }

  function clickLogo () {
    console.log('click logo');
  }

  return <div className="container" onClick={() => console.log('container')}>
  {/* return <div className="container"> */}
    <div className="row">
      <div className="logo" onClick={clickLogo}>
        <h2 className="header">RUNOOB<span className="base-green">.COM</span></h2>
      </div>
      <div className="search">
        <input className="input" placeholder="搜索......" onFocus={inputClick} />
      </div>
    </div>
  </div>
}