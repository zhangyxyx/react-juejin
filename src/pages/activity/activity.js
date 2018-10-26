import React from 'react'
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
                                    return(
                                    <ActivityConListItem key={item.id}>
                                        <img style={{"width":"100%"}}src='https://user-gold-cdn.xitu.io/1537241857260299e37fad63e2891cac2577d56537978.jpg?imageView2/1/w/940/h/560/q/85/format/webp/interlace/1'/>
                                        <ActivityConListItemTitle>{item.val}</ActivityConListItemTitle>
                                        <ActivityConListItemP><i className="iconfont" style={{'marginRight':"5px"}}>&#xe608;</i>{item.time}</ActivityConListItemP>
                                        <ActivityConListItemP><i className="iconfont" style={{'marginRight':"5px"}}>&#xe629;</i>{item.address}</ActivityConListItemP>
                                    </ActivityConListItem>
                                    )
                                    
                                })
                            }
                            
                        </ActivityConList>
                    </ActivityCon>
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
        user:state.get('home').get('user'),
        clickHeader:state.get('home').get('clickHeader'),
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
