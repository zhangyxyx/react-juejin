import React from 'react'
import {Link} from 'react-router-dom'
import {
    BoilCon,
    BoilLeft,
    BoilText,BoilTextArea,BoilTextBottom,BoilTextBottomItem,BoilTextBottomBtn,
    BoilHeader,BoilHeaderItem,
    BoilList,BoilConItem,BoilConLeft,BoilConRight,BoilConRightEvery,BoilConBottom,BoilConBottomItem,BoilConItemCon,
    BoilRight,BoilRightTop1,BoilRightTop2,BoilRightTop2Every,BoilRightTopic,BoilRightTopicTitle,BoilRightTopicTitleEvery,BoilRightTopicConItem,
    
} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Boil extends React.Component{
    render(){
        return(
            <div>
                <BoilCon>
                    <BoilLeft>
                        <BoilText>
                            <BoilTextArea></BoilTextArea>
                            <BoilTextBottom>
                                <BoilTextBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe633;</i>表情</BoilTextBottomItem>
                                <BoilTextBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe66e;</i>图片</BoilTextBottomItem>
                                <BoilTextBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe600;</i>链接</BoilTextBottomItem>
                                <BoilTextBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe678;</i>话题</BoilTextBottomItem>
                                <BoilTextBottomBtn>发布</BoilTextBottomBtn>
                            </BoilTextBottom>
                            
                        </BoilText>
                        <BoilHeader>
                            <BoilHeaderItem>推荐</BoilHeaderItem>
                            <BoilHeaderItem>动态</BoilHeaderItem>
                        </BoilHeader>
                        
                        <BoilList>
                            {this.props.list.map((item)=>{
                                return (
                                    <BoilConItem>
                                        <BoilConItemCon>
                                            <BoilConLeft><img src={item.pic} style={{'height':'100%','width':'100%',"borderRadius":"50%"}}/></BoilConLeft>
                                            <BoilConRight>
                                                <BoilConRightEvery>{item.user}</BoilConRightEvery>
                                                <BoilConRightEvery>{item.user}</BoilConRightEvery>
                                            </BoilConRight>
                                        </BoilConItemCon>
                                        <BoilConBottom>
                                            <BoilConBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe627;</i>{item.like}</BoilConBottomItem>
                                            <BoilConBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe609;</i>{item.common}</BoilConBottomItem>
                                            <BoilConBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe645;</i>分享</BoilConBottomItem>
                                        </BoilConBottom>
                                    </BoilConItem>
                                )
                            })}
                        </BoilList>
                    </BoilLeft>
                    <BoilRight>
                        <BoilRightTop1>
                            zhangyx
                        </BoilRightTop1>
                        <BoilRightTop2>
                            <BoilRightTop2Every>沸点</BoilRightTop2Every>
                            <BoilRightTop2Every>关注</BoilRightTop2Every>    
                            <BoilRightTop2Every>关注者</BoilRightTop2Every>
                        </BoilRightTop2>
                        <BoilRightTopic>
                            <BoilRightTopicTitle>
                                <BoilRightTopicTitleEvery>关注的话题</BoilRightTopicTitleEvery>
                            </BoilRightTopicTitle>
                            <BoilRightTopicConItem>每天一道算法题</BoilRightTopicConItem>
                        </BoilRightTopic>
                    </BoilRight>
                </BoilCon>
                
            </div>
        )
    }
    componentDidMount(){
        this.props.showTopicList();
    }
}
const mapStateToProps=(state)=>{
    return{
        homeheader:state.get('home').get('homeheader'),
        sortleft:state.get('home').get('sortleft'),
        sortright:state.get('home').get('sortright'),
        

        list:state.get('home').get('list'),
        user:state.get('home').get('user')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        showTopicList(){
            dispatch(actionCreators.homeheader())
            dispatch(actionCreators.sortleft())
            
            dispatch(actionCreators.showtopiclist())
            //dispatch(actionCreators.showlist())
            dispatch(actionCreators.getshowlist('1'))
            dispatch(actionCreators.showuserlist())
        },
        clickChangeList(id){
            console.log(1)
            dispatch(actionCreators.getshowlist(id))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Boil)
