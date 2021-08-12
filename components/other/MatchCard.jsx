import React from 'react'
import Link from 'next/link'

export function MatchCard({ Hteam, Hscore, Ateam, Ascore }) {
    const cuttedHTeam = Hteam.split(' ').slice(0, 2).join(' ')
    const cuttedATeam = Ateam.split(' ').slice(0, 2).join(' ')

    return (
        <Link href='#'>
            <div className='match-card mx-auto position-relative'>
                <p className='mx-2'>{cuttedHTeam}</p>
                <p className='text-success font-weight-bold'>{Hscore}</p>
                <p className='mx-1 text-danger'>:</p>
                <p className='text-success font-weight-bold'>{Ascore}</p>
                <p className='mx-2'>{cuttedATeam}</p>
            </div>
        </Link>
    )
}

export function TodayMatchCard({ Hteam, Ateam }) {
    const cuttedHTeam = Hteam.split(' ').slice(0, 2).join(' ')
    const cuttedATeam = Ateam.split(' ').slice(0, 2).join(' ')
    return (
        <Link href='#'>
            <div className='match-card mx-auto position-relative'>
                <p className='mx-2 mx-auto'>{cuttedHTeam}</p>
                <p className='mx-1 mx-auto text-danger'>-</p>
                <p className='mx-2 mx-auto'>{cuttedATeam}</p>
            </div>
        </Link>
    )
}