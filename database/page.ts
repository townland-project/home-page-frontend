interface IPage {
    path: string
    name: string
}

export const Pages: IPage[] = [
    {
        path: '/page/about',
        name: 'About'
    },
    {
        path: '/page/faq',
        name: 'FAQ',
    },
    {
        path: '/page/support',
        name: 'Support'
    },
    {
        path: '/page/privacy',
        name: 'Privacy'
    },
    {
        path: '/',
        name: 'Home'
    },
] 