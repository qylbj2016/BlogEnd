import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/blog'
import getCurTime from '../../utils/getCurTime'
import './edit.less'

const { TextArea } = Input

class Edit extends Component {
    titleIpt = null
    tagIpt = null
    authorIpt = null
    imgSrcIpt = null
    contentIpt = null
    submit = async () => {
        // 将要提交的数据，非受控组件方式获取value
        const temp = {
            blog_id: this.props.blog.blog_id,
            title: this.titleIpt.state.value,
            tag: this.tagIpt.state.value,
            author: this.authorIpt.state.value,
            img_src: this.imgSrcIpt.state.value,
            content: this.contentIpt.textAreaRef.value
        }
        if (this.props.status === 1) {
            //判断当前提交状态，是修改还是新建
            await this.props.upDtBlog(temp)
            alert('修改成功')
            this.props.changeEditState(null, 1)
        } else {
            temp.ctime = getCurTime()
            temp.blog_id = this.props.length + 1
            temp.islike = 0
            temp.views = 0
            this.props.addBlog(temp)
            alert('添加成功')
            this.props.changeEditState(null, 1)
        }
    }
    render() {
        return (
            <div className="edit">
                <div className="edit__content">
                    <div className="edit__content__ipts">
                        <div style={{ marginBottom: 2 }}>
                            <Input addonBefore="题目"
                                defaultValue={this.props.blog.title}
                                ref={dom => { if (dom) { this.titleIpt = dom } }}
                            />
                        </div>
                        <div style={{ marginBottom: 2 }}>
                            <Input addonBefore="标签"
                                defaultValue={this.props.blog.tag}
                                ref={dom => { if (dom) { this.tagIpt = dom } }}
                            />
                        </div>
                        <div style={{ marginBottom: 2 }}>
                            <Input addonBefore="作者"
                                defaultValue={this.props.blog.author}
                                ref={dom => { if (dom) { this.authorIpt = dom } }}
                            />
                        </div>
                        <div style={{ marginBottom: 8 }}>
                            <Input addonBefore="图片地址"
                                defaultValue={this.props.blog.img_src}
                                ref={dom => { if (dom) { this.imgSrcIpt = dom } }}
                            />
                        </div>
                    </div>
                <TextArea className="edit__content__text"
                    defaultValue={this.props.blog.content}
                    ref={dom => { if (dom) { this.contentIpt = dom } }}
                    rows={15}
                />
                <div className="edit__content__btns">
                    <Button onClick={() => { this.submit() }}
                        size={'large'}
                        type="primary"
                    >提交</Button>
                    <Button onClick={() => { this.props.changeEditState(null, 1) }}
                        size={'large'}
                        type="primary"
                    >关闭</Button>
                </div>
            </div>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        length: state.blog.blogs.length,
        blog: state.blog.editedBlog,
        status: state.blog.status
    }
}

export default connect(mapStateToProps, actions)(Edit)