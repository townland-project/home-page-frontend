export const RoadMap = () => {
    const now: Date = new Date()
    const Points: RoadMapPoint[] = [
        {
            name: 'Season #0',
            date: new Date('12-1-2021'),
            points: [
                'Before new year'
            ]
        },
        {
            name: 'Season #1',
            date: new Date('1-1-2022'),
            points: [
                'MVP version',
                'Design Characters, Rooms'
            ]
        },
        {
            name: 'Season #2',
            date: new Date('4-1-2022'),
            points: [
                'Alpha version'
            ]
        }
    ]

    function GetDate(from: Date | number): string {
        let date = new Date(from);

        return `${date.getDate()}th ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
    }

    function GetRGBColor(from: Date | number): string {
        let date = new Date(from)
        if (date.getFullYear() < now.getFullYear() || date.getMonth() < now.getMonth()) return '#10b981';
        else if (date.getMonth() === now.getMonth()) return '#f59e0b';
        else return '#f43f5e';
    }


    return (
        <section className="w-screen relative py-[150px] z-0">
            <div className="absolute inset-0 h-screen bg-roadmap-wave bg-no-repeat bg-cover"></div>
            <div className="absolute z-10 top-[5vh] left-[5vw] backdrop-blur-xl bg-white/100 rounded-full w-[150px] h-[150px] shadow-lg">
                <div className="absolute top-[12px] left-[67px]">
                    {
                        "ROAD MAP    ROAD MAP".split('').map((text, index) =>
                            <span key={index} className="h-[130px] w-[15px] absolute top-0 left-0" style={{ 'transform': `rotate(${index * 15}deg)` }}>{text}</span>
                        )
                    }
                </div>
                <i className="material-icons absolute text-5xl text-pink-600 top-[53px] left-[53px]">outlined_flag</i>
            </div>
            <div className="lg:flex flex-nowrap pl-0 pt-16 sm:pt-0 w-[100vw] sm:pl-[15vw] m:w-[80vw]">
                {
                    Points.map((item, index) =>
                        <div
                            key={index}
                            style={{ 'top': `calc(40px * ${index})`, 'backgroundColor': GetRGBColor(item.date) }}
                            className="relative border-2 border-[#303952] shadow-[0_3px_#303952] flex flex-col rounded-xl h-fit px-5 py-5 w-[90vw] mx-auto lg:mx-0 lg:mr-16 sm:min-w-[250px] sm:max-w-[300px]">
                            <div className="flex flex-nowrap items-center p-5 bg-white/60 backdrop-blur-lg rounded-lg">
                                <i style={{ 'color': GetRGBColor(item.date) }} className="material-icons text-5xl mr-5">flag</i>
                                <div className="flex flex-col">
                                    <strong>{item.name}</strong>
                                    <span className="text-black/60">{GetDate(item.date)}</span>
                                </div>
                            </div>
                            <strong className="mt-4 mb-2 text-black/80">List of changes: </strong>
                            <ul className="text-sm text-black/60">
                                {
                                    item.points.map((point, jndex) => <li key={jndex}>{point}</li>)
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

interface RoadMapPoint {
    name: string
    date: Date | number
    points: string[]
}