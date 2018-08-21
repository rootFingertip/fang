import React, { Component } from 'react'


//引入Login样式
import '../../assets/styles/login.less';
//引入图片
import logoImg from '../../assets/images/1.png';
//引入组件
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

export default class LoginPage extends Component {
  render() {
    return (
      <div className="Login_box">
           {/* 顶部logo */}
           <img src={logoImg} className="Login_img"></img>

           {/* 登录表单 */}
           <form action="#" className="Login_form">
                {/* 定义属性传入到后台控制字体图标(iconName)和input框的type类型   */}
                <FormInput iconName="shouji"/>
                <FormInput iconName="suo" type="password"/>
                <FormButton block value="登录"/>
                <FormButton text value="忘记密码?"/>
                <FormButton value="免费注册"/>&emsp;
                <FormButton value="游客登录"/>
           </form>
      </div>
    )
  }
}
