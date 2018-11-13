import React from 'react'
import Header from '@/common/header/header.js'
import {Link} from 'react-router-dom'
import {
    HomeCon,
    HomeHeader,HomeHeaderItem,
    ActivityCon,ActivityConTitle,ActivityConTitleLeft,ActivityConTitleRight,
    ActivityConList,ActivityConListItem,ActivityConListItemTitle,ActivityConListItemP,
    
} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Header parentProp={this.props} key="1"/>
            <div style={{"backgroundColor":"#efefef"}}>
                <HomeCon>
                    <HomeHeader>
                        <HomeHeader className="homeHeader">
                        {
                            this.props.homeheader.map((item)=>{
                                var id=item.id;
                                return <HomeHeaderItem key={item.id} className={this.props.clickHeader===item.id?'headerActive':''} 
                                    onClick={()=>this.props.clickChangeList(id)} key={item.id}>
                                <Link to={{pathname:'/juejin/activity/'+id}}>{item.val}</Link>
                                </HomeHeaderItem>
                            })
                        }
                        </HomeHeader>
                    </HomeHeader>
                    <ActivityCon>
                        <ActivityConTitle>
                            <ActivityConTitleLeft><img style={{"width":"100%","height":"100%"}} src='https://user-gold-cdn.xitu.io/1537241857260299e37fad63e2891cac2577d56537978.jpg?imageView2/1/w/940/h/560/q/85/format/webp/interlace/1'/></ActivityConTitleLeft>
                            <ActivityConTitleRight></ActivityConTitleRight>
                        </ActivityConTitle>
                        <ActivityConList>
                            {
                                this.props.list.map((item)=>{
                                    if(!item.id){
                                        return;
                                    }
                                    return(
                                    <ActivityConListItem key={item.id}>
                                        <img style={{"width":"100%"}} src={item.screenshot}/>
                                        <ActivityConListItemTitle>{item.title}</ActivityConListItemTitle>
                                        <ActivityConListItemP><i className="iconfont" style={{'marginRight':"5px"}}>&#xe608;</i>{item.startTime}</ActivityConListItemP>
                                        <ActivityConListItemP><i className="iconfont" style={{'marginRight':"5px"}}>&#xe629;</i>{item.city}</ActivityConListItemP>
                                    </ActivityConListItem>
                                    )
                                    
                                })
                            }
                            
                        </ActivityConList>
                    </ActivityCon>
                </HomeCon>
                
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
        homeheader:state.get('activity').get('homeheader'),
        sortleft:state.get('activity').get('sortleft'),
        sortright:state.get('activity').get('sortright'),
        
        topic:state.get('activity').get('topic'),
        list:state.get('activity').get('list'),
        user:state.get('activity').get('user'),
        clickHeader:state.get('activity').get('clickHeader'),
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        showTopicList(){
            dispatch(actionCreators.homeheader())
            dispatch(actionCreators.sortleft())
            
            //dispatch(actionCreators.showtopiclist())
            //dispatch(actionCreators.showlist())
            dispatch(actionCreators.getshowlist('1'))
            dispatch(actionCreators.showuserlist())
        },
        clickChangeList(id){
            console.log(id)
            dispatch(actionCreators.headerActive(id))
            //dispatch(actionCreators.getshowlist(id))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
