import Link from 'next/link'


const Sidebar = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar">
                <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                    <p className="fs-4 tournament">Tournament</p>
                </Link>

                <ul className="nav flex-column mb-auto">
                    <li>
                        <Link href="/" className="nav-link">
                            News
                        </Link>
                    </li>
                    <li>
                        <Link href="/todayMatch" className="nav-link">
                            Today Matches
                        </Link>
                    </li>
                    <li>
                        <Link href="/live" className="nav-link">
                            Live
                        </Link>
                    </li>
                    <li>
                        <Link href="/standing" className="nav-link">
                            Standing
                        </Link>
                    </li>
                    <li>
                        <Link href="/mrGoal" className="nav-link">
                            Mr Goal
                        </Link>
                    </li>
                    <li>
                        <Link href="/premierLeague" className="nav-link">
                            Premier League
                        </Link>
                    </li>
                    <li>
                        <Link href="/laliga" className="nav-link">
                            La Liga
                        </Link>
                    </li>
                    <li>
                        <Link href="/serieA" className="nav-link">
                            Serie A
                        </Link>
                    </li>
                    <li>
                        <Link href="/bundesliga" className="nav-link">
                            Bundesliga
                        </Link>
                    </li>
                    <li>
                        <Link href="/ligue1" className="nav-link">
                            Ligue 1
                        </Link>
                    </li>
                    <li>
                        <Link href="/ucl" className="nav-link">
                            UCL
                        </Link>
                    </li>
                    <li>
                        <Link href="/ec" className="nav-link">
                            EC
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar
