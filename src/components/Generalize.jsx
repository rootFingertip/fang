import React, { Component } from 'react'
import { Flex } from 'antd-mobile'; //flex布局模块
export default class Generalize extends Component {
  render() {
    return (
      <div>
        <Flex style={{backgroundColor :'#fff',marginTop:10,marginBottom:10}}>
            <Flex.Item align="center" style={{paddingTop:10,color:'#f00'}}>
                {/* 图标  */}
                <i className="iconfont icon-youhuiquan" style={{fontSize:32}}/>
                {/* 文字  */}
                <p style={{marginTop:5}}>独家优惠</p>
            </Flex.Item>
            <Flex.Item align="center" style={{paddingTop:10,color:'#a9a9a9'}}>
                {/* 图标  */}
                <i className="iconfont icon-gongjiaoche" style={{fontSize:32}}/>
                {/* 文字  */}
                <p style={{marginTop:5}}>免费看房</p>
            </Flex.Item>
            <Flex.Item align="center" style={{paddingTop:10,color:'#ffe245'}}>
                {/* 图标  */}
                <i className="iconfont icon-qiandai" style={{fontSize:32}}/>
                {/* 文字  */}
                <p style={{marginTop:5}}>信用贷</p>
            </Flex.Item>
            <Flex.Item align="center" style={{paddingTop:10,color:'#02bfff'}}>
                {/* 图标  */}
                <i className="iconfont icon-wenjiandocuments18" style={{fontSize:32}}/>
                {/* 文字  */}
                <p style={{marginTop:5}}>房市资讯</p>
            </Flex.Item>
        </Flex>
      </div>
    )
  }
}
