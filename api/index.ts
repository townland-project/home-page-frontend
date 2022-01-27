import { CBlog } from "./classes/_blog"
import { CCategory } from "./classes/_category"
import { CEvent } from "./classes/_event"
import { CPage } from "./classes/_page"

class CApi {
    public Endpoint: string = 'http://localhost:1337'

    public Category: CCategory = new CCategory(this.Endpoint)
    public Blog: CBlog = new CBlog(this.Endpoint)
    public Event: CEvent = new CEvent(this.Endpoint)
    public Page: CPage = new CPage(this.Endpoint)
}

export const Api: CApi = new CApi()