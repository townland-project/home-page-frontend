import { MarketItem } from "../../components/market-item"
import { Items } from "../../database/market"

export const Sales = () => {
    return (
        <section data-simplebar className="w-screen h-fit px-[5vw] relative -top-[100px] overflow-x-auto overflow-y-hidden">
            <div className="flex flex-nowrap items-start">
                {
                    Items.map(item =>
                        <MarketItem key={item.id} item={item} />
                    )
                }
            </div>
        </section>
    )
}