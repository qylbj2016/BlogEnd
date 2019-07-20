import React, { Component } from 'react'
import { Table, Popconfirm } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/comment'

class Comment extends Component {
    constructor(props){
        super(props)
        this.columns = [
            { title: '昵称', dataIndex: 'user_name', key: 'user_name', width:'10%'},
            { title: '邮箱', dataIndex: 'email', key: 'email', width: '15%' },
            { title: '评论', dataIndex: 'comment', key: 'comment', width: '50%' },
            { title: '时间', dataIndex: 'ctime', key: 'ctime', width: '15%'},
            {
                title: 'Action',
                dataIndex: 'del',
                key: 'x',
                width: '10%',
                render: (text, item) => {
                    return (
                        <Popconfirm onConfirm={() => { this.props.delComment(item.comment_id, item.blog_id) }}
                            title="Sure to delete?"
                        >
                            <span className="btnSpan">删除</span>
                        </Popconfirm>
                    )
                }
            }
        ]
    }
    componentDidMount(){
        this.props.getComments(0)
    }
    render() {
        const data = this.props.comments
        return (
            <div>
                <Table
                    columns={this.columns}
                    dataSource={data}
                />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        comments: state.comment.comments
    }
}
export default connect(mapStateToProps, actions)( Comment )