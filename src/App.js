import React from 'react';
// import Clock from './components/Clock'
// import HelloWorld from './components/HelloWorld'
import './css/base.css'
// import CodeSplit from './components/codeSplit/codeSplit';
// import PropsChildren from './components/propsChildren/component';
import Context from './components/context/ancestor';


function App() {
  
  return (
    <div>
      {/* <Clock /> */}
      {/* <HelloWorld user={['Sara', 'Jerry', 'Ben']} /> */}
      {/* <CodeSplit /> */}
      {/* <PropsChildren /> */}
      <Context />
    </div>
  );
}

export default App;
