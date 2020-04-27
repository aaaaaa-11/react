import React from 'react';
// import Clock from './components/Clock'
// import HelloWorld from './components/HelloWorld'
import './css/base.css'
// import CodeSplit from './components/codeSplit/codeSplit';
// import PropsChildren from './components/propsChildren/component';
// import Context from './components/context/ancestor';
import Page from './components/Page/Page'

const user = {
  permalink: 'https://www.baidu.com',
  avatarSize: 1
}
function App() {
  
  return (
    <div>
      {/* <Clock /> */}
      {/* <HelloWorld user={['Sara', 'Jerry', 'Ben']} /> */}
      {/* <CodeSplit /> */}
      {/* <PropsChildren /> */}
      {/* <Context /> */}
      <Page user={user} />
    </div>
  );
}

export default App;
