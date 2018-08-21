import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'; //轮播模块
//轮播图片
import Ban1 from '../assets/images/banner1.jpg';
import Ban2 from '../assets/images/banner2.jpg';

export default class Slide extends Component {
  render() {
    return (
      <div>
          {/* 轮播 */}
          <Carousel
                autoplay={true} //是否启动轮播
                infinite //无限循环
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                
                <a
                key="1"
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%'}}
                >
                <img
                    src={Ban1}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                    }}
                />
                </a>
                <a
                key="2"
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%'}}
                >
                <img
                    src={Ban2}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                    }}
                />
                </a>
            </Carousel>
      </div>
    )
  }
}
