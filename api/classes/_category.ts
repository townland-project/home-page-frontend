import { ICategoryResponse } from "../interfaces/category";

export class CCategory {
    constructor(private _Endpoint: string) { }

    async Find(): Promise<ICategoryResponse> {
        try {
            let res = await fetch(`${this._Endpoint}/api/blog-categories`)
            return await res.json()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}