import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/identity'
import './index.less'

class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login( values, this.props.history )
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login__wrapper">
                <Form className="login-form"
                    onSubmit={this.handleSubmit}
                >
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }]
                        })(
                            <Input
                                placeholder="Username"
                                prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }}
                                    type="user"
                                        />}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }]
                        })(
                            <Input
                                placeholder="Password"
                                prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }}
                                    type="lock"
                                        />}
                                type="password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(<Checkbox>Remember me</Checkbox>)}
                        <Button className="login-form-button"
                            htmlType="submit"
                            type="primary"
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default connect(null, actions)( Form.create({ name: 'normal_login' })(Login) )

