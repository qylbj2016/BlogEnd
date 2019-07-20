import React, { Component } from 'react'
import { Table, Popconfirm, Button } from 'antd'
import { connect } from 'react-redux'
import AddText from '../../../components/User/AddText'
import * as actions from '../../../store/actions/user'

class User extends Component {
    constructor(props){
        super(props)
        this.columns = [
            { title: '名称', dataIndex: 'name', key: 'name', width:'10%'},
            { title: '性别', dataIndex: 'sex', key: 'sex', width: '10%'},
            { title: '邮箱', dataIndex: 'email', key: 'email', width: '20%' },
            { title: '密码', dataIndex: 'pwd', key: 'pwd', width: '20%' },
            { title: '状态', dataIndex: 'state', key: 'state', width: '10%'},
            {
                title: '操作',
                dataIndex: 'opt',
                key: 'x',
                width: '30%',
                render: (text, item) => {
                    return (
                        <div className="opts">
                            <Popconfirm onConfirm={() => { this.props.stopUser({
                                email: item.email,
                                state: ! item.state,
                                code: 'xxxxxx'
                            }) }}
                                title="确认拉黑或解禁吗？"
                            >
                                <span className="btnSpan" >
                                    {
                                        item.state === 0 ? '解禁' : '拉黑'
                                    }
                                </span>
                            </Popconfirm>
                            <Popconfirm onConfirm={() => { this.props.delUser( item.email ) }}
                                title="您确定要删除吗?"
                            >
                                <span className="btnSpan" >删除</span>
                            </Popconfirm>
                        </div>
                    )
                }
            }
        ]
    }
    componentDidMount(){
        this.props.getUsers()
    }
    render() {
        return (
            <div>
                <Button onClick={()=> { this.props.changeAddState() }}
                    style={{ marginBottom: 16 }}
                    type="primary"
                >新建</Button>
                <Table
                    columns={this.columns}
                    dataSource={this.props.users || []}
                />
                {
                    this.props.canAdd === true ? <AddText /> : ''
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.user.users,
        canAdd: state.user.canAdd
    }
}
export default connect(mapStateToProps, actions)( User )