export interface IEventResponse {
    data: IEvent[];
    meta: Meta;
}

export interface IEvent {
    id:         number;
    attributes: DatumAttributes;
}

interface DatumAttributes {
    title:       string;
    start:       Date;
    end:         Date;
    content:     string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    image:       Image;
}

interface Image {
    data: Data;
}

interface Data {
    id:         number;
    attributes: DataAttributes;
}

interface DataAttributes {
    name:             string;
    alternativeText:  string;
    caption:          string;
    width:            number;
    height:           number;
    formats:          Formats;
    hash:             string;
    ext:              string;
    mime:             string;
    size:             number;
    url:              string;
    previewURL:       null;
    provider:         string;
    providerMetadata: null;
    createdAt:        Date;
    updatedAt:        Date;
}

interface Formats {
    thumbnail: Large;
    large:     Large;
    medium:    Large;
    small:     Large;
}

interface Large {
    name:   string;
    hash:   string;
    ext:    string;
    mime:   string;
    width:  number;
    height: number;
    size:   number;
    path:   null;
    url:    string;
}

interface Meta {
    pagination: Pagination;
}

interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
