import React from 'react'
import Header from '@/common/header/header.js'
import {Link} from 'react-router-dom'
import {
    User,UserLeft,UserLeftHeader,UserLeftHeaderTitle,UserLeftContent,UserLeftContentTab,UserLeftContentTabItem,
    UserRight,UserRightHeader,UserRightHeaderItem,
    UserLeftContentCon
} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store/index.js'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tab:[
                {id:'1',val:'动态'},
                {id:'2',val:'专栏'},
                {id:'3',val:'沸点'},
                {id:'4',val:'分享'},
                {id:'5',val:'赞'},
                {id:'6',val:'小册'},
                {id:'7',val:'更多',sort:[
                    {id:'7_1',val:'收藏集'},
                    {id:'7_2',val:'关注'},
                ]},
            ]
        }
    }
    render(){
        return(
            <React.Fragment>
                <Header parentProp={this.props} key="1"/>
                <div style={{"backgroundColor":"#efefef"}}>
                    <User>
                        <UserLeft>
                            <UserLeftHeader>
                                <img src="https://avatars.githubusercontent.com/u/17818212?v=3" style={{"borderRadius":"50%","width":"90px"}}/>
                                <UserLeftHeaderTitle>zhang_yx</UserLeftHeaderTitle>
                            </UserLeftHeader>
                            <UserLeftContent>
                                <UserLeftContentTab>
                                    {
                                        this.state.tab.map((item)=>{
                                            return(
                                                <UserLeftContentTabItem>{item.val}</UserLeftContentTabItem>
                                            )
                                        })
                                    }

                                </UserLeftContentTab>
                                <UserLeftContentCon></UserLeftContentCon>
                            </UserLeftContent>
                        </UserLeft>
                        <UserRight>
                            <UserRightHeader>
                                <UserRightHeaderItem>关注了</UserRightHeaderItem>
                                <UserRightHeaderItem>关注者</UserRightHeaderItem>
                            </UserRightHeader>
                            <UserRightHeader className='right'>收藏集</UserRightHeader>
                            <UserRightHeader className='right'>关注标签</UserRightHeader>
                        </UserRight>
                    </User>
                </div>
            </React.Fragment>
        )
    }
    componentDidMount(){
        this.props.showTopicList();
    }
}
const mapStateToProps=(state)=>{
    return{
        city:state.get('activity').get('city'),
        list:state.get('activity').get('list'),
        clickHeader:state.get('activity').get('clickHeader'),
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        showTopicList(){
            dispatch(actionCreators.getshowcity())
            dispatch(actionCreators.getshowlist())
        },
        clickChangeList(id){
            dispatch(actionCreators.headerActive())
            //dispatch(actionCreators.getshowlist(id))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
