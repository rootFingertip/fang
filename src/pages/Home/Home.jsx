import React, { Component } from 'react'

//引入Header组件
import Header from '../../components/Header';
//引入轮播组件
import Slide from '../../components/Slide';
//引入八大特色组件
import Feature from '../../components/Feature';
//引入4大推广
import Generalize from '../../components/Generalize';
//引入猜你喜欢
import GuessYouLike from '../GuessYouLike/GuessYouLike2';

export default class Home extends Component {
  render() {
    return (
        <div>
            {/* header组件 */}
            <Header/>
            {/* 轮播组件 */}
            <Slide />
            {/* 八大特色组件 */}
            <Feature/>
            {/* 4大推广  */}
            <Generalize />
            {/*  猜你喜欢  */}
            <GuessYouLike/>
        </div>

    )
  }
}
