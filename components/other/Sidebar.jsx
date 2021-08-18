import Link from 'next/link'


const Sidebar = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar">
                <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none" passHref>
                    <p className="fs-4 tournament">Tournament</p>
                </Link>

                <ul className="nav flex-column mb-auto">
                    <li>
                        <Link href="/" className="nav-link" passHref>
                            News
                        </Link>
                    </li>
                    <li>
                        <Link href="/todayMatch" className="nav-link" passHref>
                            Today Matches
                        </Link>
                    </li>
                    <li>
                        <Link href="/live" className="nav-link" passHref>
                            Live
                        </Link>
                    </li>
                    <li>
                        <Link href="/standing" className="nav-link" passHref>
                            Standing
                        </Link>
                    </li>
                    <li>
                        <Link href="/mrGoal" className="nav-link" passHref>
                            Mr Goal
                        </Link>
                    </li>
                    <li>
                        <Link href="/premierLeague" className="nav-link" passHref>
                            Premier League
                        </Link>
                    </li>
                    <li>
                        <Link href="/laliga" className="nav-link" passHref>
                            La Liga
                        </Link>
                    </li>
                    <li>
                        <Link href="/serieA" className="nav-link" passHref>
                            Serie A
                        </Link>
                    </li>
                    <li>
                        <Link href="/bundesliga" className="nav-link" passHref>
                            Bundesliga
                        </Link>
                    </li>
                    <li>
                        <Link href="/ligue1" className="nav-link" passHref>
                            Ligue 1
                        </Link>
                    </li>
                    <li>
                        <Link href="/ucl" className="nav-link" passHref>
                            UCL
                        </Link>
                    </li>
                    <li>
                        <Link href="/ec" className="nav-link" passHref>
                            EC
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar
