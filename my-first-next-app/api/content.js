import React from 'react';

import Page_1 from '../src/app/main/page.tsx';

// 自定义属性
const fun=async ()=>{
    const res = await fetch('http://127.0.0.1:5000/main', {
    })
    const data = await res.json()
    return data
}
const a=fun()


/*
	创建上下文对象, 并导出上下文对象
	在它们的父组件上使用 React 的 Context API，在组件外部建立一个 Context。
*/
export const appContext = React.createContext(a);

function App() {
  return (
    // 提供了一个 Context 对象，这个对象是可以被子组件共享的。
    <appContext.Provider value={a}>
      <Page_1 />
    </appContext.Provider>
  );
}

export default App;

