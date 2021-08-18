import { useContext } from 'react';
import { ThemeContext } from './../context api/ThemeContext';


function MatchDetailCard({ Status, Winner, MatchDay, Country, Hteam, Hscore, Ateam, Ascore }) {

    const { darkMode } = useContext(ThemeContext)
    const filteredWinner = Winner == 'HOME_TEAM' ? Hteam : [Winner == 'AWAY_TEAM' ? Ateam : 'draw']

    return (
        <div>
            <div className={darkMode ? 'bg-darki color-lighti link-detail match-card mx-auto position-relative' : 'link-detail match-card mx-auto position-relative'}>
                <p className='mx-2'>{Hteam}</p>
                <p className='text-success font-weight-bold'>{Hscore}</p>
                <p className='mx-1 text-gray'>:</p>
                <p className='text-success font-weight-bold'>{Ascore}</p>
                <p className='mx-2'>{Ateam}</p>
            </div>

            <div className='pt-3 d-flex flex-column'>
                <p className='text-success'><span className='fw-bold text-dark'>country :</span> {Country}</p>
                <p className='text-success'><span className='fw-bold text-dark'>status :</span> {Status}</p>
                <p className='text-success'><span className='fw-bold text-dark'>week :</span> {MatchDay}</p>
                <p className='text-success'><span className='fw-bold text-dark'>winner :</span> {filteredWinner}</p>
            </div>

        </div>
    )
}

export default MatchDetailCard
