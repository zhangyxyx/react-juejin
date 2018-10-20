import React from 'react'
import {Link} from 'react-router-dom'
import {
    HomeCon,
    HomeHeader,HomeHeaderItem,
    BookletCon,
    BookletLeft,BookletLeftItem,BookletLeftItemRight,BookletLeftItemRightTop,BookletLeftItemLeft,
    BookletRight,BookletRightItem,BookletRightBottom,
    
} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Booklet extends React.Component{
    render(){
        return(
            <div style={{"backgroundColor":"#efefef"}}>
                <HomeCon>
                    <HomeHeader>
                        <HomeHeader className="homeHeader">
                        {
                            this.props.homeheader.map((item)=>{
                                var id=item.id;
                                return <HomeHeaderItem key={item.id} onClick={()=>this.props.clickChangeList(id)} key={item.id}><Link to={{pathname:'/home/'+id}}>{item.val}</Link></HomeHeaderItem>
                            })
                        }
                        </HomeHeader>
                    </HomeHeader>
                   <BookletCon>
                       <BookletLeft>
                           <BookletLeftItem>
                                <BookletLeftItemLeft>
                                    <BookletLeftItemRightTop>Swift 数字详解</BookletLeftItemRightTop>
                                    <BookletLeftItemRightTop>从理论到应用，全面介绍 Swift 4 中面向协议的数字系统</BookletLeftItemRightTop>
                                    <BookletLeftItemRightTop>Mattt，AFNetworking 和 Alamofire 作者，苹果前技术作家</BookletLeftItemRightTop>
                                </BookletLeftItemLeft>
                           </BookletLeftItem>
                       </BookletLeft>
                       <BookletRight>
                            <BookletRightItem className='one'>掘金小册是什么？
                            
                            一个小篇幅、高浓度、成体系、有收益的技术学习平台</BookletRightItem>
                            <BookletRightItem className='two'>
                                关注公众号 领取优惠码
                                <img src='https://b-gold-cdn.xitu.io/v3/static/img/wechat-qr.f1926e7.png' style={{'marginTop':'10px','width':'100%','height':"95px"}}/>
                            </BookletRightItem>
                            <BookletRightItem className='three'>
                                <BookletRightBottom><i class="iconfont">&#xe604;</i>成为作者</BookletRightBottom>
                                <BookletRightBottom><i class="iconfont">&#xe619;</i>建议反馈</BookletRightBottom>
                            </BookletRightItem>
                            
                       </BookletRight>
                   </BookletCon>
                </HomeCon>
                
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
        
        topic:state.get('home').get('topic'),
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
export default connect(mapStateToProps,mapDispatchToProps)(Booklet)
