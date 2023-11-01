import '../style/App.scss'

import {useLayoutEffect, useEffect} from "react";
export default function App() {

    useEffect(() => {
        let height = document.documentElement.clientHeight
        document.getElementById('app').style.height = `${height}px`
    }, );





    return (
        <div className="app" id='app'>
            <div className='app-center'>
                <div className='title-line align-center'>
                    <div>
                        <h1 className='title'>The Discord Enhancement Project</h1>
                        <p className='down-title'>RichPresenceUI extends the functionality of DiscordApp by enhancing it with new features.</p>
                    </div>
                    <div className='btn-container'>
                        <div className='btn-container-line'>
                            <div id='btn' className='btn btn-primary'>
                                <svg style={{marginRight: '125px'}} className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                    <path fillRule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                                </svg>
                                <span>Download v1.9.4</span>
                            </div>
                            <span style={{marginLeft: '10px', marginRight: '10px'}}></span>
                            <div className='btn btn-secondary'>
                                <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                    <path fillRule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>
                                </svg>
                                <span>Community</span>
                            </div>
                        </div>
                    </div>
                    <div className="downloads-container">
                        <strong id="downloads-count">33,638,088</strong>
                        <span> Downloads</span>
                    </div>
                </div>
            </div>
        </div>
    )
}