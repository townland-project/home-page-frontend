import { IMarketItem } from "../components/market-item";

export const Items: IMarketItem[] = [
    {
        id: 1,
        image: 'https://picsum.photos/300/200',
        title: 'Sale title #1',
        description: 'Some description content for sale',
        keywords: ['unisex'],
        price: 10,
        offers: 1,
        start: Date.now(),
        creator: {
            image: 'https://picsum.photos/200/200',
            name: 'Townland Official',
            address: '0x0001'
        },
        collection: {
            image: 'https://picsum.photos/200/200',
            name: 'Unique Items',
            creator: '0x0001'
        }
    },
    {
        id: 2,
        image: 'https://picsum.photos/300/200',
        title: 'Sale title #2',
        description: 'Some description content for sale',
        keywords: ['unique', 'male'],
        price: 20,
        offers: 5,
        start: Date.now() - 500000000,
        creator: {
            image: 'https://picsum.photos/200/200',
            name: '!Root',
            address: '0x0000'
        },
        collection: {
            image: 'https://picsum.photos/200/200',
            name: 'Hidden Items',
            creator: '0x0000'
        }

    },
]
