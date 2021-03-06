import { useState } from 'react'
import styles from '../../styles/styles.module.css'
import LanguageSelect from '../LanguageSelect'

export default function Navbar({ onLanguageChange, language }) {

    return <div className="uk-visible@l">
        <nav id="navbarBig" className="navbarBig uk-navbar-transparent uk-navbar-container uk-dark uk-position-top uk-position-z-index" data-uk-navbar>
            <div className="uk-navbar-left">
                <div >
                    <img className="logo" src='logo.png' alt="soulmountain" width='500px' />
                </div>
            </div>
            <div className="uk-navbar-right uk-padding uk-padding-remove-vertical">
                <ul className="uk-navbar-nav">
                    <li>
                        <div className='uk-padding-large uk-padding-remove-right'>
                            <LanguageSelect language={language} onLanguageChange={onLanguageChange} />
                        </div>
                    </li>
                    <li >
                        <div className='uk-padding-large uk-padding-remove-right'>
                            <a className={styles.hvrPulseGrow} target="_blank" href="https://www.instagram.com/jordi_mestre_lopez/" rel="noopener noreferrer">
                                <img src='icons/instagram.png' alt="instagram" width="30px" height="30px" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className='uk-padding-large uk-padding-remove-right'>
                            <a className={styles.hvrPulseGrow} target="_blank" href="https://www.youtube.com/channel/UCV3HknII0tr9Xgrm29cxYFA/featured" rel="noopener noreferrer">
                                <img src='icons/youtube.png' alt="youtube" width="30px" height="30px" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className='uk-padding-large uk-padding-remove-right'>
                            <a className={styles.hvrPulseGrow} href="#contact" rel="noopener noreferrer" data-uk-scroll>
                                <img src='icons/mail.png' alt="contact" width="30px" height="30px" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <div data-uk-sticky="sel-target: .navbarSmall;  top: .navbarBig; cls-inactive: uk-hidden; cls-active: navbar">
            <nav id="navbarSmall" className="navbarSmall uk-navbar-container uk-dark uk-position-top uk-position-z-index" data-uk-navbar data-uk-scrollspy="cls:uk-animation-slide-top ">
                <div className="uk-navbar-left">
                    <div className="uk-padding-small uk-padding-remove-vertical">
                        <a href="#top" rel="noopener noreferrer" data-uk-scroll>
                            <img className="logo" src='logo.png' alt="soulmountain" width='180px' />
                        </a>
                    </div>
                </div>
                <div className="uk-navbar-right uk-padding uk-padding-remove-vertical">
                    <ul className="uk-navbar-nav">
                        <li>
                            <div className='uk-padding-small'>
                                <a className={styles.hvrPulseGrow} target="_blank" href="https://www.instagram.com/jordi_mestre_lopez/" rel="noopener noreferrer">
                                    <img src='icons/instagram.png' alt="instagram" width="30px" height="30px" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className='uk-padding-small'>
                                <a className={styles.hvrPulseGrow} target="_blank" href="https://www.youtube.com/channel/UCV3HknII0tr9Xgrm29cxYFA/featured" rel="noopener noreferrer">
                                    <img src='icons/youtube.png' alt="youtube" width="30px" height="30px" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className='uk-padding-small'>
                                <a className={styles.hvrPulseGrow} href="#contact" rel="noopener noreferrer" data-uk-scroll>
                                    <img src='icons/mail.png' alt="contact" width="30px" height="30px" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
}
