import React from 'react'
import Header from '@/common/header/header.js'
import {
    HomeCon,HomeLeft,
    HomeRight,
    HomeUserList,HomeUserListCon,HomeUserListConTop,
    HomeHeader,HomeLeftSortItem,
    OpenSourceBanner,
    OpenSourceTitle,OpenSourceList,OpenSourceListItem,OpenSourceListItemLeft,OpenSourceListItemRight,OpenSourceListItemRightP,OpenSourceListItemRightPSpan,

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
                    <HomeHeader className='homeCon'>
                    <HomeLeft>
                        <OpenSourceBanner></OpenSourceBanner>
                        <OpenSourceTitle>
                            {
                                this.props.sortleft.map((item,index)=>{
                                    if(index<=2){
                                        return <HomeLeftSortItem key={item.id}>{item.val}</HomeLeftSortItem>
                                    }else {
                                        return <HomeLeftSortItem key={item.id} style={{"float":"right"}}>{item.val}</HomeLeftSortItem>
                                    }
                                    
                                })
                            }
                        </OpenSourceTitle>
                        <OpenSourceList>
                            {this.props.list.map((item)=>{
                                return (
                                   <OpenSourceListItem key={item.id}>
                                       <OpenSourceListItemLeft><img src="https://user-gold-cdn.xitu.io/2018/3/28/1626c1bc2798945c?imageView2/1/w/80/h/80/q/85/format/we" style={{"width":"100%"}}/></OpenSourceListItemLeft>
                                       <OpenSourceListItemRight>
                                            <OpenSourceListItemRightP>{item.val}</OpenSourceListItemRightP>
                                            <OpenSourceListItemRightP>{item.con}</OpenSourceListItemRightP>
                                           <OpenSourceListItemRightP>
                                               <OpenSourceListItemRightPSpan>{item.sort}</OpenSourceListItemRightPSpan>
                                               <OpenSourceListItemRightPSpan><i className="iconfont" style={{"width":"10px"}}>&#xe66a;</i>{item.like}</OpenSourceListItemRightPSpan>
                                               <OpenSourceListItemRightPSpan><i className="iconfont" style={{"width":"10px"}}>&#xe67f;</i>{item.share}</OpenSourceListItemRightPSpan>
                                           </OpenSourceListItemRightP>
                                       </OpenSourceListItemRight>
                                   </OpenSourceListItem>
                                )
                            })}
                        </OpenSourceList>
                    </HomeLeft>
                    <HomeRight>
                        {      
                            this.props.user.map((item,index)=>{
                                console.log(this.props.user[index].sort)
                                return (
                                    <HomeUserList key={item.id}>
                                    <HomeUserListCon>
                                        <HomeUserListConTop>{item.val}</HomeUserListConTop>
                                        {/* {
                                            this.props.user[index].sort.map((sortItem)=>{
                                                return <HomeUserListConTopSpan key={sortItem.id}>{sortItem.con}</HomeUserListConTopSpan>
                                            })
                                        }
                                         */}
                                    </HomeUserListCon>
                                    </HomeUserList>
                                )
                            })
                        }
                    </HomeRight>
                    </HomeHeader>
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
            dispatch(actionCreators.showuserlist())
            dispatch(actionCreators.homeheader())
            dispatch(actionCreators.sortleft())
            
            dispatch(actionCreators.showtopiclist())
            //dispatch(actionCreators.showlist())
            dispatch(actionCreators.getshowlist('1'))
            
        },
        clickChangeList(id){
            console.log(1)
            dispatch(actionCreators.getshowlist(id))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
