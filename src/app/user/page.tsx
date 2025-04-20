'use client'
import { message, Space, Spin, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import Create from './Create';
import Edit from './Edit';
import type { TableProps } from 'antd';

export interface DataType {
    id: number;
    name: string;
    address: {
        id: number,
        name: string
    };
    tags: {
        id: number,
        name: string
    }[];
}

const tags = [
    {
        id: 1,
        name: "nice"
    },
    {
        id: 2,
        name: "loser"
    },
    {
        id: 3,
        name: "cool"
    },
    {
        id: 4,
        name: "developer"
    },
    {
        id: 5,
        name: "teacher"
    }
]

const address = [
    {
        id: 1,
        name: "武汉"
    },
    {
        id: 2,
        name: "苏州"
    },
    {
        id: 3,
        name: "南京"
    },
    {
        id: 4,
        name: "北京"
    },
    {
        id: 5,
        name: "上海"
    }
]

const data = [
    {
        id: 1,
        name: "张三",
        address: {
            id: 1,
            name: "武汉"
        },
        tags: [{
            id: 1,
            name: "nice"
        }, {
            id: 4,
            name: "developer"
        }]
    },
    {
        id: 2,
        name: "李四",
        address: {
            id: 2,
            name: "苏州"
        },
        tags: [{
            id: 2,
            name: "loser"
        }]
    },
    {
        id: 3,
        name: "王五",
        address: {
            id: 3,
            name: "南京"
        },
        tags: [{
            id: 3,
            name: "cool"
        }, {
            id: 5,
            name: "teacher"
        }]
    }
]

function User() {
    const [createVisible, setCreateVisible] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [userData, setUserData] = useState<DataType[]>([]);
    const [editInitValue, setEditInitValue] = useState<DataType>();
    useEffect(() => {
        // 模拟请求
        setUserData(data);
    }, []);
    const columns: TableProps<DataType>['columns'] = [
        {
            title: '编号',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <span>{text}</span>,
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
            render: (_, record) => <span>{record.address.name}</span>,
        },
        {
            title: '标签',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        return (
                            <Tag key={tag.id}>
                                {tag.name}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => message.info(`当前姓名为:${record.name}`)}
                    >
                        查看
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleAddClick}
                    >
                        增加
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleEditClick(record)}
                    >
                        编辑
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => message.info(`当前id为:${record.id}`)}
                    >
                        删除
                    </button>
                </Space>
            ),
        },
    ];
    const handleAddClick = () => {
        setCreateVisible(true);
    };

    const handleEditClick = (row: DataType) => {
        // 传递当前值(id、name、address、tags)
        // 传递总共可选值
        setEditInitValue(row)
        setEditVisible(true);
    };

    return (
        <div>
            {userData.length > 0 ? (
                <Table<DataType> columns={columns} dataSource={userData} rowKey="id" />
            ) : (
                <Spin />
            )}
            <Create
                open={createVisible}
                addressOptions={address}
                tagsOptions={tags}
                setOpen={setCreateVisible}
            />

            {/* 编辑需要传递当前值,而新增不用... */}
            <Edit
                open={editVisible}
                currentValue={editInitValue}
                addressOptions={address}
                tagsOptions={tags}
                setOpen={setEditVisible}
            />
        </div>
    );
}

export default User;
