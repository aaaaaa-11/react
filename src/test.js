import React from 'react';
import Test from '../src/components/test.js';
import './App.css';

const data = {
  name: '小明',
  age: 18,
  gender: 'male'
}

const arr = [1, 2, 3]

function Hello (props) {
  return <div>Hello ~</div>
}

const hello = <Hello></Hello>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>welcome to React</p>
        {hello}
        {arr}
        <Test {...data}></Test>
      </header>
    </div>
  );
}

export default App;
