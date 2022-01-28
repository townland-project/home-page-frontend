export const Intro = () => {
    return (
        <section className="container z-10 relative mx-auto px-4 lg:px-24 mt-24 mb-64 md:flex flex-nowrap items-start">
            <div className="flex flex-col w-full lg:w-2/5">
                <h1 className="text-6xl text-[#303952] leading-snug">
                    <b className="text-[#e77f67] drop-shadow-[-3px_3px_#e15f41] mr-2 townland">Townland</b>
                    is your free 2D role playing world
                </h1>
                <p className="text-[#596275] text-2xl mt-8">
                    A two-dimensional world where people play a role and collect items in a blockchain.
                </p>

                <a className="mt-20 w-fit tl-outlined-button border-gray-600 bg-green-500 text-gray-900 flex items-center justify-center" href="https://play.townland.xyz">
                    <span className="font-bold">Enter the world</span>

                    <i className="material-icons ml-6">chevron_right</i>
                </a>
            </div>
        </section>
    )
}