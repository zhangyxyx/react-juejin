import React from 'react'
import {HeaderWrapper,HeaderLeft,HeaderMsg,HeaderMsgList,HeaderCon,HeaderConLeft,HeaderRight,HeaderRightUser,HeaderInput,HeaderSearch} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import Item from 'antd/lib/list/Item';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            headerlist:[
                {id:'1',val:'发现',pic:'\ue9aa'},
                {id:'2',val:'关注',pic:'\ue609'},
                {id:'3',val:'消息',pic:'\ue634'}
            ],
        }
    }
    showMessageList(){
        console.log(this.props.message)
        if(this.props.message===true){
            return (
                <HeaderMsg>
                    {this.props.messagetwolist.map((item)=>{
                        return <HeaderMsgList key={item.id}><i className="iconfont" style={{"color":"#ea6f5a"}}>{item.imgsrc}</i>{item.val}</HeaderMsgList>
                    })}
                </HeaderMsg>
            )
        }else{
            return null;
        }
    }
    render(){
        const {changeMessageShow,changeMessageHide}=this.props
        return(
            <div>
                <HeaderWrapper>
                    <HeaderLeft >
                        <img src="//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" style={{"width":"100%","height":"100%"}}/>
                    </HeaderLeft>
                    <HeaderCon>
                        {
                            this.state.headerlist.map((item,index)=>{
                                return <HeaderConLeft 
                                key={index} 
                                onMouseOver={()=>changeMessageShow(item.val)} 
                                onMouseOut={()=>changeMessageHide(item.val)}>
                                
                                <i className="iconfont" style={{"color":"#ea6f5a",'fontSize':'22px'}}>{item.pic}</i>
                                {item.val}
                                </HeaderConLeft>
                            })
                        }
                        {this.showMessageList()}
                        <HeaderInput onFocus={this.props.handelInputFocused} onBlur={this.props.handleInputBlur}/>
                        <HeaderSearch className={this.props.focused?'focused':''}><i className="iconfont">&#xe619;</i></HeaderSearch>
                        
                        <HeaderRightUser>
                            <img src="http://upload.jianshu.io/users/upload_avatars/5256327/ffff0f51-d286-47fe-9e5c-a513372cb626.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" style={{"width":"100%","height":"100%"}}/>
                        </HeaderRightUser>
                        <i className="iconfont" style={{"float":"right"}}>&#xe607;</i>
                        {/* <img src="" style={{"width":"100%","height":"100%"}}/> */}
                    </HeaderCon>
                    <HeaderRight>
                        <i className="iconfont">&#xe600;</i>
                        写文章
                    </HeaderRight>
                </HeaderWrapper>
            </div>
        )
    }
    
}
const mapStateToProps=(state)=>{
    return{
        focused:state.get('header').get('focused'),
        message:state.get('header').get('message'),
        messagetwolist:state.get('header').get('messagetwolist')
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)