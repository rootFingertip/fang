import React, { Component } from 'react'
//引入Home样式
import 'antd-mobile/dist/antd-mobile.css'; //ui组件样式
import '../assets/styles/Header.less';
import { NavBar, Icon } from 'antd-mobile'; //NavBar模块
import '../assets/fonts/iconfont/iconfont.css';


export default class Header extends Component {
  render() {
    return (
      <div className="header">
            <NavBar
          mode="dark"
          // icon={<Icon type="down" />}
          leftContent={
            [
              <span key="0">成都</span>,
              <Icon key="1" type="down" />
            ]
          }
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <i key="0" className='iconfont icon-ditu8'/>
            , <span key="1">地图</span>
          ]}
        >
            <div className="search-btn">
              <i className="iconfont icon-sousuo"/>
              搜好房，上源码搜房APP
            </div>
        </NavBar>

        
      </div>
    )
  }
}
