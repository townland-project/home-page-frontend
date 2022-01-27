import Head from "next/head"

import { Events } from "./events"
import { Footer } from "./footer"
import { Header } from "./header"
import { History } from "./history"
import { Intro } from "./intro"
import { RoadMap } from "./roadmap"
import { Sales } from "./sales"
import { Start } from "./start"

const Home = () => {
    return (
        <main data-simplebar className="w-screen h-screen font-roboto relative select-none overflow-y-auto overflow-x-hidden">
            <Head>
                <title>Townland | Your 2D RP World</title>
            </Head>
            <div className="md:pb-20 tl-bg-peanut-dark">
                <Header />
                <Intro />
            </div>
            <Sales />
            <History />
            <RoadMap />
            <Events />
            <Start />
            <Footer />
        </main>
    )
}

export default Home