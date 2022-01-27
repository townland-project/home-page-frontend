import { IEventResponse } from "../interfaces/event"

export class CEvent {
    constructor(private _Endpoint: string) { }

    async Find(): Promise<IEventResponse> {
        try {
            let res = await fetch(`${this._Endpoint}/api/events?populate=*`)
            return await res.json()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}