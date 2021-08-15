import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ReactTooltip from 'react-tooltip'


export function MatchCard({ LeagueName, Hteam, Hscore, Ateam, Ascore }) {

    // this is for tooltip --> in nextjs tooltip get feedback in server so then show prop error
    // for solve this problem we should render tooltip after mounting
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const cuttedHTeam = Hteam.split(' ').slice(0, 2).join(' ')
    const cuttedATeam = Ateam.split(' ').slice(0, 2).join(' ')

    useEffect(() => {
        setTooltipVisible(true)
    }, [])

    return (
        <div data-tip={LeagueName} data-for='league' className='match-card mx-auto position-relative'>
            {tooltipVisible ? <ReactTooltip id='league' type='warning' effect='solid' /> : null}
            <p className='mx-2'>{cuttedHTeam}</p>
            <p className='text-success font-weight-bold'>{Hscore}</p>
            <p className='mx-1 text-danger'>:</p>
            <p className='text-success font-weight-bold'>{Ascore}</p>
            <p className='mx-2'>{cuttedATeam}</p>
        </div>
    )
}

export function TodayMatchCard({LeagueName, Hteam, Ateam }) {

    // this is for tooltip --> in nextjs tooltip get feedback in server so then show prop error
    // for solve this problem we should render tooltip after mounting
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const cuttedHTeam = Hteam.split(' ').slice(0, 2).join(' ')
    const cuttedATeam = Ateam.split(' ').slice(0, 2).join(' ')

    useEffect(() => {
        setTooltipVisible(true)
    }, [])

    return (
            <div data-tip={LeagueName} data-for='league' className='match-card mx-auto position-relative'>
                {tooltipVisible ? <ReactTooltip id='league' type='warning' effect='solid' /> : null}
                <p className='mx-2 mx-auto'>{cuttedHTeam}</p>
                <p className='mx-1 mx-auto text-danger'>-</p>
                <p className='mx-2 mx-auto'>{cuttedATeam}</p>
            </div>
    )
}