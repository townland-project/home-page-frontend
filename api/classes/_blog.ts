import qs from "qs";
import { IBlogOneResponse, IBlogResponse } from "../interfaces/blog"

export class CBlog {
    constructor(private _Endpoint: string) { }

    async Find(): Promise<IBlogResponse> {
        try {
            const query = qs.stringify({
                populate: '*'
            }, {
                encodeValuesOnly: true,
            });
            let res = await fetch(`${this._Endpoint}/api/blogs?${query}`)
            return await res.json()
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async FindByCategory(category: string): Promise<IBlogResponse> {
        try {
            const query = qs.stringify({
                populate: '*',
                filters: {
                    category: {
                        name: {
                            $eq: category,
                        },
                    },
                },
            }, {
                encodeValuesOnly: true,
            });
            let res = await fetch(`${this._Endpoint}/api/blogs?${query}`)
            return await res.json()
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async FindById(id: string): Promise<IBlogOneResponse> {
        try {
            const query = qs.stringify({
                populate: '*',
            }, {
                encodeValuesOnly: true,
            });
            let res = await fetch(`${this._Endpoint}/api/blogs/${id}?${query}`)
            return await res.json()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}