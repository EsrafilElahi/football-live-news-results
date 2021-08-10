import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import moment from 'moment'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

import Sidebar from './../other/Sidebar'
import { setDarkMode } from './../../redux/action/darkModeAction';


function Layout({ children }) {

    const darkMode = useSelector((state) => state.darkMode)
    const dispatch = useDispatch()

    return (
        <div style={{ color: darkMode ? '#22' : null }}>
            <Head>
                <title>Next | Football News</title>
            </Head>

            <div className="container text-center h-100">

                {/* Header */}
                <div className="row bg-danger header-sec">
                    <div className="col-4 text-start p-3">
                        <span>⚽Next Football⚽</span>
                    </div>
                    <div className="col-4 text-center switch-dark-mode">
                        <span style={{ color: darkMode ? 'gray' : 'yellow', paddingRight: '3px' }}>✩</span>
                        <Toggle
                            onChange={() => dispatch(setDarkMode())}
                            icons={{
                                checked: <span></span>,
                                unchecked: <span></span>,
                            }}
                        />
                        <span style={{ color: darkMode ? '#c96dfd' : 'gray', paddingLeft: '3px' }}>☽</span>
                    </div>
                    <div className="col-4 text-end p-3">
                        <span>{moment().format("ddd/MMM - h:mm a")}</span>
                    </div>
                </div>

                {/* Content vs Sidebar */}
                <div className="row">

                    {/* Content */}
                    <div className="col-9 content">
                        {children}
                    </div>

                    {/* Sidebar */}
                    <div className="col-3 bg-success">
                        <Sidebar />
                    </div>

                </div>

                {/* Footer */}
                <div className="row footer">
                    <div className="col-12 footer-p bg-secondary">
                        Footer Copyright 2021
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Layout
