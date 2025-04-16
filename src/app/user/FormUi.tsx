import {Button, Col, Drawer, Form, FormInstance, Input, Row, Select, Space} from 'antd';

const FormUi = (props: {
    title: string;
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
    addressOptions?: {
        id: number,
        name: string
    }[];
    tagsOptions?: {
        id: number,
        name: string
    }[];
    form: FormInstance;
}) => {
    const {title, open, onClose, onSubmit, addressOptions, tagsOptions, form} = props;

    return (
        <>
            <Drawer
                title={title}
                width={720}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
            >
                <Form layout="vertical" requiredMark form={form}>
                    <Row gutter={12}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="姓名"
                                rules={[{required: true, message: '请输入姓名'}]}
                            >
                                <Input placeholder="请输入姓名"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={12}>
                        <Col span={12}>
                            <Form.Item
                                name="address"
                                label="地址"
                                rules={[{required: true, message: '请选择地址'}]}
                            >
                                <Select placeholder="请选择地址"
                                        options={
                                            addressOptions?.map((item) => {
                                                return {
                                                    value: item.id,
                                                    label: `${item.name}(${item.id})`
                                                }
                                            })
                                        }
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={12}>
                        <Col span={12}>
                            <Form.Item
                                name="tags"
                                label="标签"
                                rules={[{required: true, message: '请选择标签'}]}
                            >
                                <Select mode="multiple"
                                        placeholder="请选择标签"
                                        options={
                                            tagsOptions?.map((item) => {
                                                return {
                                                    value: item.id,
                                                    label: `${item.name}(${item.id})`
                                                }
                                            })
                                        }
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Space>
                            <Button onClick={onClose}>取消</Button>
                            <Button onClick={onSubmit} type="primary">
                                确定
                            </Button>
                        </Space>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
};

export default FormUi;
