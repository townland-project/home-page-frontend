export const Search = () => {
    return (
        <section className="flex flex-nowrap items-center bg-white rounded-xl overflow-hidden pl-4 pr-2 py-2 border-2 border-gray-900 shadow-[0_2px_#111827]">
            <input type="text" placeholder="Search event" className="outline-none w-full" />
            <div className="h-[25px] w-[1px] bg-gray-300 mx-6"></div>
            <div className="flex flex-nowrap">
                <i className="material-icons mr-2">calendar_month</i>
                <select className="w-[100px] md:w-[200px] bg-transparent outline-none">
                    <option value="">Date</option>
                </select>
            </div>
            <button className="tl-outlined-button md:w-[105px] ml-6 bg-green-300">
                <span className="hidden md:block">Search</span>
                <i className="material-icons -ml-[8px] md:hidden">search</i>
            </button>
        </section>
    )
}