export interface ICategoryResponse {
    data: Datum[];
    meta: Meta;
}

interface Datum {
    id: number;
    attributes: ICategory;
}

export interface ICategory {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

interface Meta {
    pagination: Pagination;
}

interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
