import React, { Component } from 'react'
import { Table, Popconfirm, Button } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/blog'
import Edit from '../../../components/Blog/Edit'

class Blog extends Component {
    constructor(props){
        super(props)
        this.columns = [
            { title: '类型', dataIndex: 'tag', key: 'tag', width:'10%'},
            { title: '标题', dataIndex: 'title', key: 'title', width: '20%' },
            { title: '浏览次数', dataIndex: 'views', key: 'views', width: '10%' },
            { title: '喜欢次数', dataIndex: 'islike', key: 'islike', width: '10%'},
            { title: '时间', dataIndex: 'ctime', key: 'ctime', width: '10%'},
            {
                title: '操作',
                dataIndex: 'opt',
                key: 'opt',
                width: '15%',
                render: (text, item) => {
                    return (
                        <div className="Blog">
                            <Popconfirm onConfirm={() => { this.props.delBlog(item.blog_id) }}
                                title="确定要删除吗?"
                            >
                                <span className="btnSpan">删除</span>
                            </Popconfirm>
                            <span className="btnSpan"
                                onClick={() => { this.props.changeEditState( item, 1 ) }}
                            >修改</span>
                        </div>
                    )
                }
            }
        ]
    }
    componentDidMount(){
        this.props.getBlogs('all')
    }
    render() {
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button onClick={() => { this.props.changeEditState( [], 2 ) }}
                        type="primary"
                    >新建</Button>
                </div>
                <Table
                    columns={this.columns}
                    dataSource={this.props.blogs}
                />
                {
                    this.props.canEdit === true ? <Edit /> : ''
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        blogs: state.blog.blogs,
        canEdit: state.blog.canEdit
    }
}
export default connect(mapStateToProps, actions)( Blog )