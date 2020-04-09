import React from 'react';
import HelloWorld from './components/HelloWorld'
import './css/base.css'

function App() {
  
  return (
    <div>
      <HelloWorld user={['Sara', 'Jerry', 'Ben']} />
    </div>
  );
}

export default App;
