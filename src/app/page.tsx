'use client'
import { Button, Card, message } from 'antd'
import './page.module.css'

const Home = (): JSX.Element => {
    return (
        <Card title="首页">
            <Button onClick={() => message.info('ok')}>按钮</Button>
        </Card>
    )
}

export default Home