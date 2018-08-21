import React, { Component } from 'react'

//引入类型插件
import PropTypes from 'prop-types';
//引入less样式
import '../assets/styles/FormInput.less';

export default class FormInput extends Component {

  //缺省配置
  static defaultProps = {
    type : 'text'
  }
  
  //属性类型约束
  static propTypes = {
    type: PropTypes.string,
    iconName: PropTypes.string
  }

  render() {
    //获取传入参数
    let {type,iconName} = this.props;
    return (
      <div className="inputGroup"> 
            <i className={'left-icon iconfont icon-'+iconName}></i>
            <input type={type} className="from_input"  />
      </div>
    )
  }
}
