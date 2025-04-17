export interface PageParams{
    pageNum: number;
    pageSize: number;
}

export interface Pagination<T> {
    total: number;
    list: T[];
}