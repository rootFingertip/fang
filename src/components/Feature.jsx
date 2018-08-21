import React, { Component } from 'react'
import { Flex } from 'antd-mobile'; //flex布局模块
import '../assets/styles/Feature.less'; //引入组件样式
import featureImg from '../assets/images/feature_img.png'; //引入精灵图

export default class Feature extends Component {
  render() {
    return (
        <div className="feature_box">
            {/* 特色第一行 */}
        <Flex style={{paddingTop:20}}>
            <Flex.Item align="center">
                {/* 图标  */}
                <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400}}/>
                {/* 文字  */}
                <p>新房</p>
            </Flex.Item>
            <Flex.Item align="center">
                {/* 图标  */}
                <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-50}}/>
                {/* 文字  */}
                <p>二手房</p>
            </Flex.Item>
            <Flex.Item align="center">
                {/* 图标  */}
                <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-100}}/>
                {/* 文字  */}
                <p>租房</p>
            </Flex.Item>
            <Flex.Item align="center">
                {/* 图标  */}
                <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-150}}/>
                {/* 文字  */}
                <p>商铺写字楼</p>
            </Flex.Item>
        </Flex>
        {/* 特色第二行 */}
        <Flex style={{paddingTop:20}}>
            <Flex.Item align="center">
                {/* 图标  */}
                <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-200}}/>
                {/* 文字  */}
                <p>卖房</p>
            </Flex.Item>
            <Flex.Item align="center">
                {/* 图标  */}
                <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-250}}/>
                {/* 文字  */}
                <p>海外地产</p>
            </Flex.Item>
            <Flex.Item align="center">
                {/* 图标  */}
                <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-300}}/>
                {/* 文字  */}
                <p>小区房价</p>
            </Flex.Item>
            <Flex.Item align="center">
                {/* 图标  */}
                <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-350}}/>
                {/* 文字  */}
                <p>问答</p>
            </Flex.Item>
        </Flex>
        </div>
    )
  }
}
