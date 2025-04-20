import { NextRequest, NextResponse } from "next/server";
import pool from '../db'

// 模拟用户数据
const mockUsers = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
];


// GET 请求处理
export async function GET(request: NextRequest) {
    // 获取分页、筛选和排序参数，设置默认值
    const pageNum = parseInt(request.nextUrl.searchParams.get("pageNum") || "1");
    const pageSize = parseInt(request.nextUrl.searchParams.get("pageSize") || "20");
    const typeFilter = request.nextUrl.searchParams.get("type") || null; // 允许为 null
    const searchTerm = request.nextUrl.searchParams.get("search") || null; // 允许为 null
    const sortBy = request.nextUrl.searchParams.get("sortBy") || 'number'; // 默认按编号排序

    // 确保pageSize不超过合理范围
    const safePageSize = Math.min(pageSize, 100);
    const offset = (pageNum - 1) * safePageSize;

    // 构建基础查询语句和参数
    let countQuery = 'SELECT COUNT(DISTINCT p.id) AS total FROM pokemon p ';
    let dataQuery = `
        SELECT 
            p.number,
            p.name,
            p.image,
            GROUP_CONCAT(DISTINCT t.name ORDER BY t.id SEPARATOR ',') AS types,
            GROUP_CONCAT(DISTINCT t.color ORDER BY t.id SEPARATOR ',') AS type_colors,
            GROUP_CONCAT(DISTINCT t.name_en ORDER BY t.id SEPARATOR ',') AS type_names_en 
        FROM pokemon p 
    `;
    let joins = 'LEFT JOIN pokemon_type pt ON p.id = pt.pokemon_id LEFT JOIN type t ON pt.type_id = t.id ';
    let whereClauses = [];
    let queryParams = [];

    // 添加筛选条件
    if (typeFilter) {
        joins += ' '; // 确保JOIN和WHERE之间有空格
        whereClauses.push('t.name_en = ?');
        queryParams.push(typeFilter);
    }
    if (searchTerm) {
        whereClauses.push('p.name LIKE ?');
        queryParams.push(`%${searchTerm}%`);
    }

    // 组合WHERE子句
    let whereSql = '';
    if (whereClauses.length > 0) {
        whereSql = 'WHERE ' + whereClauses.join(' AND ');
    }

    // 组合完整查询语句
    countQuery += joins + whereSql;
    dataQuery += joins + whereSql + ' GROUP BY p.id';

    // 添加排序
    let orderBySql = ' ORDER BY ';
    switch (sortBy) {
        case 'name':
            orderBySql += 'p.name ASC';
            break;
        case 'type':
            // 按第一个属性排序可能比较复杂，这里简化为按编号排序
            orderBySql += 'p.number ASC';
            break;
        default: // 'number' 或其他默认情况
            orderBySql += 'p.number ASC';
    }
    dataQuery += orderBySql;

    // 添加分页
    dataQuery += ' LIMIT ? OFFSET ?';
    const dataQueryParams = [...queryParams, safePageSize, offset];
    const countQueryParams = [...queryParams]; // Count查询不需要分页参数

    try {
        // 执行查询获取总数
        const [totalResult] = await pool.query(countQuery, countQueryParams);
        const total = totalResult[0].total;

        // 执行查询获取分页数据
        const [rows] = await pool.query(dataQuery, dataQueryParams);

        // 处理返回的数据，将字符串类型的types和colors转换为结构化数组
        const formattedRows = rows.map(row => {
            const typesArray = row.types ? row.types.split(',') : [];
            const colorsArray = row.type_colors ? row.type_colors.split(',') : [];
            const namesEnArray = row.type_names_en ? row.type_names_en.split(',') : [];

            // 将并行数组合并为对象数组
            const structuredTypes = typesArray.map((typeName, index) => ({
                name: typeName,
                name_en: namesEnArray[index] || null, // 获取对应的英文名
                color: colorsArray[index] || null    // 获取对应的颜色
            }));

            return {
                number: row.number,
                name: row.name,
                image: row.image,
                types: structuredTypes // 使用新的结构化数组
                // 不再需要单独返回 type_colors 和 type_names_en
            };
        });

        return NextResponse.json({
            code: 200,
            message: "Success",
            data: {
                total: total,
                list: formattedRows, // 返回格式化后的数据
                pageNum: pageNum,
                pageSize: safePageSize
            }
        });
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json({
            code: 500,
            message: "数据库查询失败"
        }, { status: 500 });
    }
}

// POST 请求处理（示例）
export async function POST(request: Request) {
    const body = await request.json();
    return NextResponse.json({
        code: 200,
        data: { ...body, id: Date.now() },
    });
}
const getUsers = async (req: NextRequest) => {
    try {
        const [rows] = await pool.query('SELECT * FROM user');
        return rows;
    } catch (error) {
        console.error('error:', error);
    }
};