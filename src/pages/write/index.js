import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Write extends Component{

    render() {
        const {loginStatus} = this.props

        if(loginStatus){

            return(
                <div>寫文章頁面</div>
            )
        }else{
            return <Redirect to='/login' />
        }


    }

}

const mapState = (state) => ({
    loginStatus: state.getIn(['login','login'])
})



export default connect(mapState, null)(Write);
