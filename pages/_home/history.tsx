export const History = () => {
    return (
        <section className="flex flex-col items-center text-center justify-center py-[100px] w-screen">
            <h2 className="text-6xl text-slate-800">Right now in Townland</h2>
            <p className="text-xl text-slate-500 mt-[20px] mx-10 md:mx-0">So far, you can see how many transactions have taken place in the city by citizens</p>

            { /* ----- Items Start ----- */}
            <div className="md:flex flex-nowrap items-center justify-center mt-16 w-8/12 md:w-fit">
                {/* Citizen Item Start */}
                <div className="flex flex-nowrap items-center md:justify-center w-full md:w-fit">
                    <div className="mr-5 w-[75px] h-[75px] min-w-[75px] border-2 border-solid border-green-600 bg-green-200 rounded-3xl flex items-center justify-center">
                        <i className="material-icons text-green-600 text-3xl">groups</i>
                    </div>
                    <div className="flex flex-col text-left">
                        <strong className="text-3xl text-slate-800">10</strong>
                        <span className="text-slate-600">Citizens</span>
                    </div>
                </div>
                {/* Citicen Item End */}
                <div className="my-4 md:mx-6 w-full md:w-[1px] h-[1px] md:h-12 md:bg-slate-400"></div>
                {/* Towl Item Start */}
                <div className="flex flex-nowrap items-center md:justify-center w-full md:w-fit">
                    <div className="mr-5 w-[75px] h-[75px] min-w-[75px] border-2 border-solid border-sky-600 bg-sky-200 rounded-3xl flex items-center justify-center">
                        <i className="material-icons text-sky-600 text-3xl">savings</i>
                    </div>
                    <div className="flex flex-col text-left">
                        <strong className="text-3xl text-slate-800">10,000 <sub className="text-sm">TOWL</sub></strong>
                        <span className="text-slate-600">Townland Coin</span>
                    </div>
                </div>
                {/* Towl Item End */}
                <div className="my-4 md:mx-6 w-full md:w-[1px] h-[1px] md:h-12 md:bg-slate-400"></div>
                {/* Towl Item Start */}
                <div className="flex flex-nowrap items-center md:justify-center w-full md:w-fit">
                    <div className="mr-5 w-[75px] h-[75px] min-w-[75px] border-2 border-solid border-violet-600 bg-violet-200 rounded-3xl flex items-center justify-center">
                        <i className="material-icons text-violet-600 text-3xl">celebration</i>
                    </div>
                    <div className="flex flex-col text-left">
                        <strong className="text-3xl text-slate-800">1</strong>
                        <span className="text-slate-600">Events</span>
                    </div>
                </div>
                {/* Towl Item End */}
            </div>
            {/* ----- Items End ----- */}
            <div className="flex flex-nowrap mt-16">
                <div className="w-[200px] h-[400px] bg-man bg-contain bg-no-repeat"></div>
                <div className="w-[200px] h-[400px] bg-woman bg-contain bg-no-repeat"></div>
            </div>
        </section>
    )
}