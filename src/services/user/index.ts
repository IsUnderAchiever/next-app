import { ApiResponse } from "@/types/api";
import {User} from "@/types/api/user";
import {request} from "@/utils/request";

class UserService {
    private baseUrl = "/api/user";

    // // 获取用户列表
    // getUsers(params?: { page?: number; limit?: number }): Promise<ApiResponse<User[]>> {
    //     return fetcher(this.baseUrl);
    // }
    //
    // // 获取单个用户
    // getUserById(id: string): Promise<ApiResponse<User>> {
    //     return fetcher(`${this.baseUrl}/${id}`);
    // }
    //
    // // 创建用户
    // createUser(data: Partial<User>): Promise<ApiResponse<User>> {
    //     return fetcher(this.baseUrl, { method: "POST", data });
    // }
    //
    // // 更新用户
    // updateUser(id: string, data: Partial<User>): Promise<ApiResponse<User>> {
    //     return fetcher(`${this.baseUrl}/${id}`, { method: "PUT", data });
    // }
    //
    // // 删除用户
    // deleteUser(id: string): Promise<ApiResponse<void>> {
    //     return fetcher(`${this.baseUrl}/${id}`, { method: "DELETE" });
    // }
}

export const userService = new UserService();