import React, { Component } from 'react'
import { ListView,Flex  } from "antd-mobile";


import '../../assets/styles/guessyoulike.less';
/**
 * ListView组件是一个列表组件
 *  
 * 使用步骤：
 *      1. 引入
 *      2. 准备数据
 *      3. 组件构造中，定义列表组件的初始化配置
 *      4. 在render函数中，使用ListView组件
 *      5. 根据ListView的配置，抽取函数
 */

const data = [
    {
        img: 'https://pic1.ajkimg.com/display/xinfang/9c2330e60b2d7a4bb06758e4641f000d/80x80x50n@2x.jpg?t=1',
        title: '融创天府逸家商铺1',
        address: '龙泉驿-龙泉驿',
        areasize: '1室2厅 110平米',
        tags: ['商场']
    },
    {
        img: 'https://pic1.ajkimg.com/display/xinfang/9c2330e60b2d7a4bb06758e4641f000d/80x80x50n@2x.jpg?t=1',
        title: '融创天府逸家商铺2',
        address: '龙泉驿-龙泉驿',
        areasize: '1室2厅 98平米',
        tags: ['商场','绕城外','公园']
    },
    {
        img: 'https://pic1.ajkimg.com/display/xinfang/9c2330e60b2d7a4bb06758e4641f000d/80x80x50n@2x.jpg?t=1',
        title: '融创天府逸家商铺3',
        address: '龙泉驿-龙泉驿',
        areasize: '1室2厅 98平米',
        tags: ['商场','单价低']
    },
];

export default class GuessYouLike extends Component {

    // 构造初始化
    constructor(props){
        super(props);

        // 初始化ListView的数据源
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2, //行改变的匹配规则
        });

        // 初始化状态
        this.state = {
            dataSource, // 把数据源实例放入状态
            isLoading: true, // 是否正在加载
        };


        // 绑定事件函数this指向
        this.renderFooter = this.renderFooter.bind(this);
    }


    // 组件挂载完毕
    componentDidMount(){
        // simulate initial Ajax
        setTimeout(() => {
            // 模拟异步ajax请求，用结果修改状态
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data), // 把数据对象，克隆listView的数据源中
                isLoading: false,
            });
        }, 1000);
    }
    

    // 行渲染函数
    renderRow(rowData, sectionID, rowID){

        // 准备楼盘标签的渲染色
        let tagArr  = rowData.tags.map((tag,index)=>{
            switch (tag) {
                case '商场':
                    return <span key={index} className="green">{tag}</span>

                case '绕城外':
                    return <span key={index} className="orange">{tag}</span>

                case '公园':
                    return <span key={index} className="skyblue">{tag}</span>

                default:
                    return <span key={index} className="gray">{tag}</span>
            }
        })

        return (
            // <div>第{rowID}列:{rowData.title}</div>
            <Flex>
                <Flex.Item className="left-box">
                    {/* 左侧图片 */}
                    <img src={rowData.img} alt="" style={{width:'100%'}}/>    
                </Flex.Item>
                <Flex.Item className="right-box">
                    {/* 标题 */}
                    <p className="title">{rowData.title}</p>    
                    <p className="address">{rowData.address}</p>    
                    <p className="areasize">{rowData.areasize}</p>    
                    <p>{tagArr}</p> 
                    <div className="price">售价待定</div>
                </Flex.Item>
            </Flex>
        )
    }

    // 分割线渲染
    renderSeparator(sectionID, rowID){
        return (
                <div
                  key={`${sectionID}-${rowID}`}
                  style={{
                    backgroundColor: '#ccc',
                    height: 1,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                  }}
                />
        )
    }

    // 页头渲染
    renderHeader(){
        return (
            <div className="headerLike">猜你喜欢</div>
        )
    }

    // 页脚渲染
    renderFooter(){
        return (
            <div style={{ padding: 5, textAlign: 'center' }}>
                {this.state.isLoading ? '加载中...' : '加载完成'}
            </div>
        )
    }

    render() {
        return (
            <ListView
                // 必备：数据源（克隆数据）
                dataSource={this.state.dataSource}
                // 必备：拿到每一个数据，渲染行的结构定义
                renderRow={this.renderRow}
                renderHeader={this.renderHeader}
                renderFooter={this.renderFooter}
                renderSeparator={this.renderSeparator}
                className="am-list list-box"
                //pageSize={4}
                useBodyScroll
                //onScroll={() => { console.log('scroll'); }}
                //scrollRenderAheadDistance={500}
                //onEndReached={this.onEndReached}
                //onEndReachedThreshold={10}
            />
        )
    }
}
