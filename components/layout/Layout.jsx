import { useContext } from 'react'
import Head from 'next/head'
import moment from 'moment'
import Toggle from 'react-toggle'

import Sidebar from './../other/Sidebar'
import Title from '../other/Title'
import { ThemeContext } from './../context api/ThemeContext';
import "react-toggle/style.css"


function Layout({ children, alertTitle }) {

    const { darkMode, setDarkMode } = useContext(ThemeContext)

    return (
        <div>
            <Head>
                <title>Next Football</title>
            </Head>

            <div className={darkMode ? 'bg-darki color-lighti container text-center h-100' : 'bg-lighti color-darki container text-center h-100'}>

                {/* Header */}
                < div className='row header-sec'>
                    <div className="col-4 text-start p-3">
                        <span>⚽Next Football⚽</span>
                    </div>
                    <div className="col-4 text-center switch-dark-mode">
                        <span style={{ color: darkMode ? '#F2F2F2' : 'yellow', paddingRight: '3px' }}>✩</span>
                        <Toggle
                            onChange={() => setDarkMode(!darkMode)}
                            icons={{
                                checked: <span></span>,
                                unchecked: <span></span>,
                            }}
                        />
                        <span style={{ color: darkMode ? '#c96dfd' : '#F2F2F2', paddingLeft: '3px' }}>☽</span>
                    </div>
                    <div className="col-4 text-end p-3">
                        <span>{moment().format("ddd/MMM - h:mm a")}</span>
                    </div>
                </div>

                {/* Content vs Sidebar */}
                <div className="row">

                    {/* Content */}
                    <div className="col-8 col-md-9 content bg-yellow">
                        <div className='col-12 pt-2'>   {/* Title */}
                            <Title title={alertTitle} />
                        </div>
                        {children}
                    </div>

                    {/* Sidebar */}
                    <div className='col-4 col-md-3 color-dark' >
                        <Sidebar />
                    </div>

                </div>

                {/* Footer */}
                <div className="row footer">
                    <div className="col-12 footer-p">
                        Copyright 2021 &copy;Esrafil Elahi
                    </div>
                </div>


            </div>

        </div >
    )
}

export default Layout

