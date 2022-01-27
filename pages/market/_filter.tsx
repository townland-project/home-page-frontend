import { useState } from "react"

export const Filter = (props: Props) => {
    const Categories: string[] = [
        'all',
        'unisex', 'male'
    ]

    const [category, setCategory] = useState<string>('all')

    return (
        <section 
            style={{'left': props.show ? '' : '-100vw'}}
            className="z-10 shadow-2xl md:shadow-none flex flex-col min-w-[300px] md:min-w-[250px] px-10 py-10 md:px-0 md:py-0 md:mt-8 fixed md:static left-0 top-0 bottom-0 bg-white md:bg-transparent transition-[left] duration-300">
            <div className="flex flex-col">
                <strong className="text-slate-700 mb-2">Categories</strong>
                {
                    Categories.map((item, index) =>
                        <button
                            key={index}
                            onClick={() => setCategory(item)}
                            style={{
                                'boxShadow': category === item ? '0 4px #2563eb' : '',
                                'backgroundColor': category === item ? '#3b82f6' : '',
                                'color': category === item ? '#fff' : '',
                            }}
                            className="text-left py-[8px] px-[18px] my-[5px] rounded-lg text-slate-500 first-letter:uppercase hover:bg-slate-200 hover:shadow-[0_4px_#cbd5e1]">
                            {item}
                        </button>
                    )
                }
            </div>
        </section>
    )
}

interface Props {
    show: boolean
}