import React, { Component } from 'react'
import { Avatar, Button } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../../store/actions/identity'
import './header.less'

class Header extends Component {
    componentDidMount(){
        this.props.name || this.props.initInfo( this.props.history )
    }
    render() {
        return (
            <div className="Header__wrapper" >
                <Avatar icon="user"
                    style={{ backgroundColor: '#87d068' }}
                />
                <span className="Header__wrapper__tips" >欢迎您,尊敬的{this.props.name}</span>
                <Button onClick={() => { this.props.logout( this.props.history ) }}
                    type="primary"
                >注销</Button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        name: state.identity.admin
    }
}

export default connect(mapStateToProps, actions)(withRouter(Header))

