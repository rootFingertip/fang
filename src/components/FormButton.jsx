import React, { Component } from 'react'

//引入FormButton样式
import '../assets/styles/FormButton.less';

export default class FormButton extends Component {
  render() {
    //获取参数
    let {block,value,text} = this.props;
    let clsName = 'form_button';
    //判断是否是块级元素
    if(block){
        clsName +=' blcok';
    }
    return (
      text === true? 
      <p className="text-botton">{value}</p> :
      <button className={clsName}>{value}</button>
    )
  }
}
