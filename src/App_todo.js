import React from 'react';
import './App.css';

import Header from '../src/components/common/Header.js';
import ToDo from './components/toDo/toDo.js';

function App() {
  function testEDefault (e) {
    console.log('out');
  }
  
  return (
    <div className="App">
      <div onClick={testEDefault}>
        <Header className="App-header" />
        {/* <a href="/test">链接</a> */}
        <ToDo />
      </div>
    </div>
  );
}

export default App;
