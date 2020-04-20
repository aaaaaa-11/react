import React from 'react';
// import Clock from './components/Clock'
import HelloWorld from './components/HelloWorld'
import './css/base.css'


function App() {
  
  return (
    <div>
      {/* <Clock /> */}
      <HelloWorld user={['Sara', 'Jerry', 'Ben']} />
    </div>
  );
}

export default App;
