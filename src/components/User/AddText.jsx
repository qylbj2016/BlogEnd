import React, { Component } from 'react'
import { Radio, Input, Button } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/user'
import './addText.less'

class AddText extends Component {
    temp = {
        name: null,
        email: null,
        pwd: null,
        sex: 'x',
        state: 0
    }
    async submit(){
        this.temp.code = '000000'
        await this.props.addUser( this.temp )
        alert( '添加成功' )
        this.props.changeAddState()
    }
    handleData = (event) => {
        this.temp[event.target.name] = event.target.value
    }
    render() {
        return (
            <div className="AddText">
                <div className="AddText__wrapper">
                    <div style={{ marginBottom: 16 }}>
                        <Input addonBefore="昵称"
                            name="name"
                            onChange={event => this.handleData(event)}
                        />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <Input addonBefore="邮箱"
                            name="email"
                            onChange={event => this.handleData(event)}
                        />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <Input addonBefore="密码"
                            name="pwd"
                            onChange={event => this.handleData(event)}
                        />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <span>性别：</span>
                        <Radio.Group defaultValue={'x'}
                            name="sex"
                            onChange={event => this.handleData(event)}
                        >
                            <Radio value={'f'}>男</Radio>
                            <Radio value={'m'}>女</Radio>
                            <Radio value={'x'}>X</Radio>
                        </Radio.Group>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <span>状态：</span>
                        <Radio.Group defaultValue={0}
                            name="state"
                            onChange={event => this.handleData(event)}
                        >
                            <Radio value={0}>0</Radio>
                            <Radio value={1}>1</Radio>
                        </Radio.Group>
                    </div>
                    <div className="edit__content__btns">
                        <Button onClick={() => { this.submit() }}
                            size={'large'}
                            type="primary"
                        >提交</Button>
                        <Button onClick={() => { this.props.changeAddState() }}
                            size={'large'}
                            type="primary"
                        >关闭</Button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        canAdd: state.user.canAdd
    }
}

export default connect(mapStateToProps, actions)(AddText)
