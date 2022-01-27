import Link from "next/link"

export const Tabs = (props: Props) => {
    return (
        <section className="tl-tabs tl-tabs-top">
            {
                props.Items.map((item, index) =>
                    <Link key={index}
                        href={item == 'all' ? '/blog' : `/blog/category/${item}`}>
                        <a
                            href={item == 'all' ? '/blog' : `/blog/category/${item}`}
                            style={{
                                'color': item === props.Active ? '#1f2937' : 'rgba(0, 0, 0, 0.6)',
                            }}
                            className={`relative tl-tab ${item === props.Active ? 'tl-tab-active' : ''} border-gray-900 bg-white first-letter:uppercase`}>
                            {item}
                        </a>
                    </Link>
                )
            }
        </section>
    )
}

interface Props {
    Active: string
    Items: string[],
}