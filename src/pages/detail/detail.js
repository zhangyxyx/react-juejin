import React from 'react'

import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
    DetailCon,
    DetailConLeft,DetailConLeftTitle,DetailConLeftTitleCon,DetailConLeftTitleConP,DetailConLeftCon,DetailConLeftConTitle,
    DetailConRight,DetailConRightUser,DetailConRightUserTitle,DetailConRightUserCon,DetailConRightUserRead,
    } from './style.js'
class Detail extends React.Component{
    render(){
        return(
            <div style={{"backgroundColor":"#efefef"}}>
            <DetailCon>
                <DetailConLeft>
                    <DetailConLeftTitle>
                        <img style={{"width":"30px","height":"30px","float":"left"}} src='https://user-gold-cdn.xitu.io/2018/5/16/1636811dc757d981?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'/>
                        <DetailConLeftTitleCon>
                            <DetailConLeftTitleConP>老钱</DetailConLeftTitleConP>
                            <DetailConLeftTitleConP>2018年10月26日</DetailConLeftTitleConP>
                        </DetailConLeftTitleCon>
                    </DetailConLeftTitle>
                    <img style={{"width":"100%","height":"367px"}} src="https://user-gold-cdn.xitu.io/2018/10/25/166aa4dd95a5f619?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1"/>
                    <DetailConLeftCon>
                        <DetailConLeftConTitle>开源了一个 JavaScript 版敏感词过滤库</DetailConLeftConTitle>
                    </DetailConLeftCon>
                </DetailConLeft>
                <DetailConRight>
                    <DetailConRightUser>
                        <DetailConRightUserTitle>关于作者</DetailConRightUserTitle>
                        <DetailConRightUserCon>
                            <img style={{"width":"30px","height":"30px"}} src='https://user-gold-cdn.xitu.io/2018/5/16/1636811dc757d981?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'/>
                        </DetailConRightUserCon>
                        <DetailConRightUserRead><i className="iconfont" style={{'marginRight':"5px"}}>&#xe627;</i></DetailConRightUserRead>
                        <DetailConRightUserRead><i className="iconfont" style={{'marginRight':"5px"}}>&#xe6ab;</i></DetailConRightUserRead>
                    </DetailConRightUser>
                </DetailConRight>
            </DetailCon>
            </div>
        )
    }
    componentDidMount(){
        this.props.showcontant();
    }
}
const mapStateToProps=(state)=>{
    console.log(state.get('detail').get('con'))
    return{
        con:state.get('detail').get('con')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        showcontant(){
            dispatch(actionCreators.showcontant())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail)