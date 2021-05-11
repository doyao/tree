import React from 'react'
import { Result } from 'antd'
export default function index() {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="对不起，找不到你请求的资源"
            />,
        </div>
    )
}
