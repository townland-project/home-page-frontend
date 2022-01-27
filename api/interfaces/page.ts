export interface IPageResponse {
    data: IPage[];
    meta: Meta;
}

export interface IPage {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    title:     string;
    content:   string;
    createdAt: Date;
    updatedAt: Date;
    uid:       string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
