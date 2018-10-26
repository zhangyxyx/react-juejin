import React from 'react'
import {Link} from 'react-router-dom'
import {
    HeaderWrapper,HeaderLeft,HeaderMsg,HeaderMsgList,
    HeaderCon,HeaderConLeft,HeaderRight,HeaderRightUser,
    HeaderInput,HeaderSearch,HeaderSearchBtn,
    HeaderWrite} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import Item from 'antd/lib/list/Item';


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            headerlist:[
                {id:'1',val:'首页',mark:'home',pic:'\ue9aa'},
                {id:'2',val:'沸点',mark:'boil',pic:'\ue609'},
                {id:'3',val:'小册',mark:'booklet',pic:'\ue634'},
                {id:'4',val:'开源库',mark:'opensource',pic:'\ue634'},
                {id:'5',val:'活动',mark:'activity',pic:'\ue634'},
            ],
        }
    }
    showMessageList(){
        if(this.props.message===true){
            return (
                <HeaderMsg>
                    {this.props.messagetwolist.map((item)=>{
                        return <HeaderMsgList key={item.id}><i className="iconfont" style={{"color":"#ea6f5a"}}>{item.imgsrc}</i>{item.val}</HeaderMsgList>
                    })}
                    {this.props.params}
                </HeaderMsg>
            )
        }else{
            return null;
        }
    }
    componentDidMount(){
        var json={
            home:'1',
            boil:'2',
            booklet:'3',
            opensource:'4',
            activity:'5',
        }
        var id=this.props.location.pathname.split('/')[2]
        this.props.clickHeaderActive(json[id])
    }
    render(){
        const {changeMessageShow,changeMessageHide}=this.props
        return(
            <div>
                <HeaderWrapper>
                    <HeaderWrapper className='HeaderWrapper'>
                    <HeaderLeft >
                        <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" style={{"width":"100px","height":"60px","marginTop":"0px"}}/>
                    </HeaderLeft>
                    <HeaderCon>
                        {
                            this.state.headerlist.map((item,index)=>{
                                var id=item.id;
                                return <HeaderConLeft  key={item.id}>
                                <Link to={{pathname:'/juejin/'+item.mark}} className={this.props.clickHeader===item.id?'headerActive':''} onClick={()=>this.props.clickHeaderActive(item.id)}>{item.val}</Link>
                                </HeaderConLeft>
                            })
                        }
                        {this.showMessageList()}
                        <HeaderSearch>
                            <HeaderInput onFocus={this.props.handelInputFocused} onBlur={this.props.handleInputBlur}/>
                            <HeaderSearchBtn className={this.props.focused?'focused':''}><i className="iconfont" style={{"width":"10px"}}>&#xe72e;</i></HeaderSearchBtn>
                        </HeaderSearch>
                        <HeaderWrite>写文章</HeaderWrite>
                        <HeaderRightUser>
                            <img src="http://upload.jianshu.io/users/upload_avatars/5256327/ffff0f51-d286-47fe-9e5c-a513372cb626.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" style={{"width":"100%","height":"100%"}}/>
                        </HeaderRightUser>
                        <i className="iconfont" style={{"float":"right","fontSize":"25px","marginTop":"10px"}}>&#xe69b;</i>
                    </HeaderCon>
                    </HeaderWrapper>
                </HeaderWrapper>
            </div>
        )
    }
    
}
const mapStateToProps=(state)=>{
    return{
        focused:state.get('header').get('focused'),
        message:state.get('header').get('message'),
        messagetwolist:state.get('header').get('messagetwolist'),
        clickHeader:state.get('header').get('clickHeader')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handelInputFocused(){
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        changeMessageShow(item){
            if(item==='消息'){
                dispatch(actionCreators.getmessagelist())//消息下面的二级菜单数据
                dispatch(actionCreators.messageShow())//是否显示消息下面二级菜单 
            }
        },
        changeMessageHide(item){
            if(item==='消息'){
                dispatch(actionCreators.messageHide())//是否显示消息下面二级菜单 
            }
        },
        clickHeaderActive(item){
            dispatch(actionCreators.headerActive(item))//是否显示消息下面二级菜单 
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)