import { Lines } from "./lines"

export const Start = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center rounded-3xl bg-cyan-200 border-2 border-gray-900 shadow-[0_3px_#111827] mx-[10vw] mb-8 py-[65px] px-[56px]">
            <Lines color="#06b6d4" className="absolute bottom-8 left-20" />
            <div className="absolute z-0 top-24 left-72 w-[65px] h-[65px] bg-planet bg-no-repeat bg-contain"></div>

            <h2 className="text-4xl z-10 text-bold text-slate-800">
                The world is in your hand
            </h2>
            <p className="mt-5 z-10 lg:w-4/12 text-slate-500">
                You are in a world where you can be anyone and you want to be because the world is in your hands
            </p>

            <a className="mt-20 tl-outlined-button bg-green-400 text-gray-900 flex items-center justify-center" href="https://play.townland.xyz">
                <span className="font-bold">Enter the world</span>

                <i className="material-icons ml-6">chevron_right</i>
            </a>
        </section>
    )
}