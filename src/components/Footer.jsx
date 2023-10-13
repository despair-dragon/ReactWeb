import '../style/Footer.scss'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='center-footer'>
                <div className='font-footer'>
                    <div className='mobail'>
                        <a href='-' className='item-butt-footer'>Advertise With Us</a>
                        <a href='-' className='item-butt-footer'>Privacy Policy</a>
                        <a href='-' className='item-butt-footer'>Contact Us</a>
                        <a href='-' className='item-butt-footer'>Cookie Preferences</a>
                        <div className='item-age' style={{marginTop: '15px'}}>© 2023-2023 <a href='-' className='team' style={{color: '#5a88ce'}}>&nbsp;CursedNet Team</a></div>
                        <div className='item-butt-footer' style={{marginTop: '15px'}}>
                            <div className='item-social'>
                                <svg className="social-icon-inner" width="32" height="32" viewBox="0 0 20 16" aria-hidden="true">
                                    <g fill="none" fillRule="evenodd">
                                        <path className="foreground-26ym5y da-foreground" fill="currentColor" d="M1,14.1538462 L1.95,14.1538462 C3.73125,14.1538462 5.5125,13.5384615 6.81875,12.4307692 C5.15625,12.4307692 3.73125,11.2 3.1375,9.6 C3.375,9.6 3.6125,9.72307692 3.85,9.72307692 C4.20625,9.72307692 4.5625,9.72307692 4.91875,9.6 C3.1375,9.23076923 1.7125,7.63076923 1.7125,5.66153846 C2.1875,5.90769231 2.78125,6.15384615 3.49375,6.15384615 C2.425,5.41538462 1.83125,4.18461538 1.83125,2.70769231 C1.83125,1.96923077 2.06875,1.23076923 2.30625,0.615384615 C4.20625,3.07692308 7.05625,4.67692308 10.38125,4.8 C10.2625,4.67692308 10.2625,4.30769231 10.2625,4.06153846 C10.2625,1.84615385 12.04375,0 14.18125,0 C15.25,0 16.31875,0.492307692 17.03125,1.23076923 C17.8625,1.10769231 18.8125,0.738461538 19.525,0.246153846 C19.2875,1.23076923 18.575,1.96923077 17.8625,2.46153846 C18.575,2.46153846 19.2875,2.21538462 20,1.84615385 C19.525,2.70769231 18.8125,3.32307692 18.1,3.93846154 L18.1,4.43076923 C18.1,9.84615385 14.18125,16 6.9375,16 C4.68125,16 2.6625,15.3846154 1,14.1538462 Z"></path>
                                        <rect width="32" height="32"></rect>
                                    </g>
                                </svg>
                            </div>
                            <div className='item-social' style={{ marginLeft: '20px', marginRight: '20px'}}>
                                <svg className="social-icon-inner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="26" height="26">
                                    <path fill="currentColor" fillRule="evenodd" d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273l-1.47-1.338l-1.604-1.398l.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537c-1.336-.668-2.54-1.002-3.744-1.137c-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735c-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02c0 0 1 1.74 3.743 1.806c0 0 .4-.533.805-1.002c-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03c.33.136.66.27.93.4a8.18 8.18 0 0 0 1.8.536c.93.135 1.996.2 3.21 0c.6-.135 1.2-.267 1.8-.535c.39-.2.87-.4 1.397-.737c0 0-.6.936-2.205 1.404c.33.466.795 1 .795 1c2.744-.06 3.81-1.8 3.87-1.726c0-3.87-1.815-7.02-1.815-7.02c-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335c0 .74-.57 1.34-1.27 1.34c-.7 0-1.27-.6-1.27-1.334c.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335c0 .74-.57 1.34-1.27 1.34c-.7 0-1.27-.6-1.27-1.334c0-.74.57-1.338 1.27-1.338z"></path>
                                </svg>
                            </div>
                            <div className='item-social'>
                                <svg className="social-icon-inner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="26" height="26">
                                    <path fill="currentColor" fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pc'>
                <div>
                    <div className='item'>
                        <div className='item-block' style={{marginBottom: '50px'}}>
                            <h3 className='font-main'>Community</h3>
                            <div>
                                <p className='font-under'>
                                    <a href='-'>
                                        Discord
                                    </a>
                                </p>
                                <p className='font-under'>
                                    <a href='-'>
                                        Twitter
                                    </a>
                                </p>
                                <p className='font-under'>
                                    <a href='-'>
                                        GitHub
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className='item-block' style={{marginLeft: '20%', marginRight: '20%', marginBottom: '50px'}}>
                            <h3 className='font-main'>Content</h3>
                            <div>
                                <p className='font-under'>
                                    <a href='-'>
                                        Plugins
                                    </a>
                                </p>
                                <p className='font-under'>
                                    <a href='-'>
                                        Docs
                                    </a>
                                </p>
                                <p className='font-under'>
                                    <a href='-'>
                                        Developers
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className='item-block' style={{marginBottom: '50px'}}>
                            <h3 className='font-main'>Help</h3>
                            <div>
                                <p className='font-under'>
                                    <a href='-'>
                                        Documentation
                                    </a>
                                </p>
                                <p className='font-under'>
                                    <a href='-'>
                                        Contact Us
                                    </a>
                                </p>
                                <p className='font-under'>
                                    <a href='-'>
                                        Cookie Preferences
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}