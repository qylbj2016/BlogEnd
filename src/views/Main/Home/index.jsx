import React, { Component } from 'react'
import { Descriptions, Badge } from 'antd'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Descriptions bordered
                    title="信息统计"
                >
                    <Descriptions.Item label="服务器">阿里云</Descriptions.Item>
                    <Descriptions.Item label="操作系统">Centos7</Descriptions.Item>
                    <Descriptions.Item label="自动续费">YES</Descriptions.Item>
                    <Descriptions.Item label="购买日期">2018-11-24 18:36:25</Descriptions.Item>
                    <Descriptions.Item label="到期时间"
                        span={3}
                    >
                        2019-11-24 18:36:25
                    </Descriptions.Item>
                    <Descriptions.Item label="状态"
                        span={3}
                    >
                        <Badge status="processing"
                            text="Running"
                        />
                    </Descriptions.Item>
                    <Descriptions.Item label="域名">www.cinco.site</Descriptions.Item>
                    <Descriptions.Item label="更新时间">2019-7-15</Descriptions.Item>
                    <Descriptions.Item label="版本" >2.0</Descriptions.Item>
                    <Descriptions.Item label="SSR服务端口">8080</Descriptions.Item>
                    <Descriptions.Item label="数据服务端口">8081</Descriptions.Item>
                    <Descriptions.Item label="代理端口">80</Descriptions.Item>
                    <Descriptions.Item label="数据库">mysql</Descriptions.Item>
                    <Descriptions.Item label="数据库版本">5.7</Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}
