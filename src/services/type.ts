export interface PageParams{
    pageNum: number;
    pageSize: number;
}

export interface Pagination<T> {
    total: number;
    list: T[];
}

export enum PageEnum{
    PAGE_NUM = 1,
    PAGE_SIZE = 20,
}