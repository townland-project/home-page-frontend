import qs from "qs";
import { IPageResponse } from "../interfaces/page";

export class CPage {
    constructor(private _Endpoint: string) { }

    async FindById(id: string): Promise<IPageResponse> {
        try {
            const query = qs.stringify({
                filters: {
                    uid: {
                        $eq: id,
                    },
                },
            }, {
                encodeValuesOnly: true,
            });
            
            let res = await fetch(`${this._Endpoint}/api/pages?${query}`)
            return await res.json()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}