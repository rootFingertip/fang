import React, { Component } from 'react'

import ReactDOM from 'react-dom';

// 引入自定义组件
// import Login from './Login/LoginPage'; //登录页
import Header from './Home/Home';      //首页

//全局样式
// import '../assets/styles/core.less';

export default class App extends Component {
  render() {
    return (
      //  <Login/>
      <Header/>
    )
  }
}

// 在顶级组件中渲染
ReactDOM.render(<App />, document.getElementById('root'));
