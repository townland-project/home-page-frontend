import { Lines } from "./lines"

export const Intro = () => {
    return (
        <section className="container mx-auto px-4 lg:px-24 mt-24 md:flex flex-nowrap items-start justify-center">
            <div className="flex flex-col w-full md:w-2/5">
                <h1 className="text-6xl text-[#303952] leading-snug">
                    <b className="text-[#e77f67] drop-shadow-[-3px_3px_#e15f41] mr-2 townland">Townland</b>
                    is your free 2D role playing world
                </h1>
                <p className="text-[#596275] text-2xl mt-8">
                    A two-dimensional world where people play a role and collect items in a blockchain.
                </p>

                <a className="mt-20 w-fit py-[12px] tl-button border-gray-600 bg-green-500 text-gray-900 flex items-center justify-center" href="https://play.townland.xyz">
                    <span className="font-bold">Enter the world</span>

                    <i className="material-icons ml-6">chevron_right</i>
                </a>
            </div>

            <div className="relative flex flex-col items-end justify-start md:w-3/5 md:h-full">
                <Lines color="#06b6d4" className="-scale-100" />
                <div className="relative -top-20 right-[5vw] w-[350px] h-[350px] bg-geek bg-no-repeat bg-center bg-contain"></div>
                <div className="hidden md:block relative -top-20 w-[250px] h-[250px] bg-lady bg-no-repeat bg-center bg-contain"></div>
                <div className="relative -top-80 right-72 -rotate-3 w-[100px] h-[100px] bg-chat bg-no-repeat bg-center bg-contain"></div>
                <Lines color="#34d399" className="relative -top-[220px] right-64" />
            </div>
        </section>
    )
}