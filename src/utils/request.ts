import type { AxiosRequestConfig, CancelTokenStatic, CancelStatic } from 'axios';
/**
 * Create an axios instance.
 * @param instanceName
 */
export declare function createAxiosInstance(instanceName?: string): {
    default: import("axios").AxiosInstance;
};
export declare function setAxiosInstance(requestConfig: any, axiosInstance: any): void;
interface RequestConfig<D> extends AxiosRequestConfig<D> {
    instanceName?: string;
    withFullResponse?: boolean;
}
export interface RequestProps {
    get: <T = any, D = any>(url: string, config?: RequestConfig<D>) => Promise<T>;
    delete: <T = any, D = any>(url: string, config?: RequestConfig<D>) => Promise<T>;
    head: <T = any, D = any>(url: string, config?: RequestConfig<D>) => Promise<T>;
    options: <T = any, D = any>(url: string, config?: RequestConfig<D>) => Promise<T>;
    post: <T = any, D = any>(url: string, data?: D, config?: RequestConfig<D>) => Promise<T>;
    put: <T = any, D = any>(url: string, data?: D, config?: RequestConfig<D>) => Promise<T>;
    patch: <T = any, D = any>(url: string, data?: D, config?: RequestConfig<D>) => Promise<T>;
}
interface Request extends RequestProps {
    <T = any, D = any>(options: RequestConfig<D>): Promise<T>;
    <T = any, D = any>(url: string, config?: RequestConfig<D>): Promise<T>;
    Cancel: CancelStatic;
    CancelToken: CancelTokenStatic;
    isCancel: (value: any) => boolean;
}

declare const request: Request;
export { request };