import {NextRequest, NextResponse} from "next/server";

// 模拟用户数据
const mockUsers = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
];

// GET 请求处理
export async function GET(request: NextRequest) {
    console.log('request.query.id:',request.nextUrl.searchParams.get("id"))
    return NextResponse.json({
        code: 200,
        message: "Success",
        data: mockUsers,
    });
}

// POST 请求处理（示例）
export async function POST(request: Request) {
    const body = await request.json();
    return NextResponse.json({
        code: 200,
        data: { ...body, id: Date.now() },
    });
}