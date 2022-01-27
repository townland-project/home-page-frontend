export interface IBlogResponse {
    data: IBlog[];
    meta: Meta;
}

export interface IBlogOneResponse {
    data: IBlog;
    meta: Meta;
}

export interface IBlog {
    id: number;
    attributes: Attributes;
}

interface Attributes {
    title: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    summery: string;
    content: string;
    image: Image;
    category: Category;
    author: Author;
    keywords: Keywords;
}

interface Author {
    data: AuthorData;
}

interface AuthorData {
    id: number;
    attributes: FluffyAttributes;
}

interface FluffyAttributes {
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: Date;
    updatedAt: Date;
}

interface Category {
    data: DAT;
}

interface DAT {
    id: number;
    attributes: TentacledAttributes;
}

interface TentacledAttributes {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

interface Image {
    data: ImageData;
}

interface ImageData {
    id: number;
    attributes: StickyAttributes;
}

interface StickyAttributes {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewURL: null;
    provider: string;
    providerMetadata: null;
    createdAt: Date;
    updatedAt: Date;
}

interface Formats {
    thumbnail: Large;
    large: Large;
    medium: Large;
    small: Large;
}

interface Large {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path: null;
    url: string;
}

interface Keywords {
    data: DAT[];
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
