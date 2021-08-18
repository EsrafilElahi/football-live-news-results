import React, { useState, useEffect, useContext } from 'react'
import ReactTooltip from 'react-tooltip'
import Link from 'next/link'
import { ThemeContext } from './../context api/ThemeContext';


export function MatchCard({ id, League, LeagueName, Hteam, Hscore, Ateam, Ascore }) {

    const { darkMode } = useContext(ThemeContext)

    // this is for tooltip --> in nextjs tooltip get feedback in server so then show prop error
    // for solve this problem we should render tooltip after mounting
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const cuttedHTeam = Hteam.split(' ').slice(0, 2).join(' ')
    const cuttedATeam = Ateam.split(' ').slice(0, 2).join(' ')

    const filteredHTeam = cuttedHTeam === "Wolverhampton Wanderers" ||
        cuttedHTeam === "Borussia Mönchengladbach" ||
        cuttedHTeam === "Borussia Dortmund" ||
        cuttedHTeam === "Eintracht Frankfurt" ? cuttedHTeam.split(' ').slice(1, 2).join(' ') : cuttedHTeam
    const filteredATeam = cuttedATeam === "Wolverhampton Wanderers" ||
        cuttedATeam === "Borussia Mönchengladbach" ||
        cuttedATeam === "Borussia Dortmund" ||
        cuttedATeam === "Eintracht Frankfurt" ? cuttedATeam.split(' ').slice(1, 2).join(' ') : cuttedATeam

    useEffect(() => {
        setTooltipVisible(true)
    }, [])

    return (
        <Link href={`/${League}/${id}`} >
            <div data-tip={LeagueName} data-for='league' className={darkMode ? 'bg-darki color-lighti link-detail match-card mx-auto position-relative' : 'link-detail match-card mx-auto position-relative'}>
                {tooltipVisible ? <ReactTooltip id='league' type='warning' effect='solid' /> : null}
                <p className='mx-2'>{filteredHTeam}</p>
                <p className='text-success font-weight-bold'>{Hscore}</p>
                <p className='mx-1 text-gray'>:</p>
                <p className='text-success font-weight-bold'>{Ascore}</p>
                <p className='mx-2'>{filteredATeam}</p>
            </div>
        </Link>
    )
}

export function TodayMatchCard({ LeagueName, Hteam, Ateam }) {

    const { darkMode } = useContext(ThemeContext)

    // this is for tooltip --> in nextjs tooltip get feedback in server so then show prop error
    // for solve this problem we should render tooltip after mounting
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const cuttedHTeam = Hteam.split(' ').slice(0, 2).join(' ')
    const cuttedATeam = Ateam.split(' ').slice(0, 2).join(' ')

    const filteredHTeam = cuttedHTeam === "Wolverhampton Wanderers" ||
        cuttedHTeam === "Borussia Mönchengladbach" ||
        cuttedHTeam === "Borussia Dortmund" ||
        cuttedHTeam === "Eintracht Frankfurt" ? cuttedHTeam.split(' ').slice(1, 2).join(' ') : cuttedHTeam
    const filteredATeam = cuttedATeam === "Wolverhampton Wanderers" ||
        cuttedATeam === "Borussia Mönchengladbach" ||
        cuttedATeam === "Borussia Dortmund" ||
        cuttedATeam === "Eintracht Frankfurt" ? cuttedATeam.split(' ').slice(1, 2).join(' ') : cuttedATeam

    useEffect(() => {
        setTooltipVisible(true)
    }, [])

    return (
        <div data-tip={LeagueName} data-for='league' className={darkMode ? 'bg-darki color-lighti match-card mx-auto position-relative' : 'match-card mx-auto position-relative'}>
            {tooltipVisible ? <ReactTooltip id='league' type='warning' effect='solid' /> : null}
            <p className='mx-2 mx-auto'>{filteredHTeam}</p>
            <p className='mx-1 mx-auto text-gray'>-</p>
            <p className='mx-2 mx-auto'>{filteredATeam}</p>
        </div>
    )
}