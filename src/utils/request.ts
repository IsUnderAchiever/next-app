import axios, {AxiosError, AxiosHeaders} from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export type Result<T> = {
    code: number,
    message: string,
    data: T
}

// 导出Request，可以用来自定义传递配置来创建实例
export class Request {
    // axios 实例
    instance: AxiosInstance;
    // 基础配置，url和超时时间
    baseConfig: AxiosRequestConfig = { baseURL: "/api", timeout: 60000 };

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(Object.assign(this.baseConfig, config));

        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig<unknown>) => {
                // 确保 headers 不为 undefined
                if (!config.headers) {
                    config.headers = new AxiosHeaders();
                }

                // 添加 token 验证
                const token = localStorage.getItem("token") as string | null;
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                return config;
            },
            (err: unknown) => {
                // 请求错误处理
                return Promise.reject(err);
            }
        );

        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                // 返回响应数据
                // 只返回 data 部分
                return res.data;
            },
            (err: AxiosError) => {
                let message = "";
                if (err.response) {
                    switch (err.response.status) {
                        case 400:
                            message = "请求错误(400)";
                            break;
                        case 401:
                            message = "未授权，请重新登录(401)";
                            break;
                        case 403:
                            message = "拒绝访问(403)";
                            break;
                        case 404:
                            message = "请求出错(404)";
                            break;
                        case 500:
                            message = "服务器错误(500)";
                            break;
                        default:
                            message = `连接出错(${err.response.status})!`;
                    }
                } else if (err.request) {
                    message = "请求无响应，请检查网络！";
                } else {
                    message = "请求异常，请稍后重试！";
                }

                // 全局提示（可根据实际需求替换为 ElMessage 或其他方式）
                console.error(message);

                return Promise.reject({ message, ...err.response });
            }
        );
    }

    public get<T>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<Result<T>> {
        return this.instance.get(url, config);
    }

    public post<T>(
        url: string,
        data?: unknown,
        config?: AxiosRequestConfig
    ): Promise<Result<T>> {
        return this.instance.post(url, data, config);
    }

    public put<T>(
        url: string,
        data?: unknown,
        config?: AxiosRequestConfig
    ): Promise<Result<T>> {
        return this.instance.put(url, data, config);
    }

    public delete<T>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<Result<T>> {
        return this.instance.delete(url, config);
    }

}

// 创建Request实例并赋值给变量
const requestInstance = new Request({});

// 默认导出变量
export default requestInstance;
