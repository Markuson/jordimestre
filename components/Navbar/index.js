import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {

    const textStyles = () => {
        return {
            fontSize: "1.2rem"
        }
    }

    return <div data-uk-sticky="sel-target: .uk-navbar-container;  top: #navbar; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up; cls-inactive: uk-navbar-transparent; cls-active: navbar">
        <nav id="navbar" className="uk-width-1-1 uk-navbar-container uk-dark uk-position-top" data-uk-navbar data-uk-scrollspy="cls:uk-animation-fade ">
            <div className="uk-navbar-left uk-padding-small">
                <div className="uk-padding-large uk-padding-remove-vertical">
                    <img className="logo" src='logo.png' alt="soulmountain" width="200px" />
                </div>
            </div>
            <div className="uk-navbar-right uk-padding uk-padding-remove-vertical">
                <ul className="uk-navbar-nav">
                    <div className='uk-padding'>
                        <li className='uk-active'>
                            <a style={textStyles()} className="uk-button uk-button-text uk-button-small uk-text" href="#videos" data-uk-scroll>
                                VIDEOS
                                </a>
                        </li>
                    </div>
                    <div className='uk-padding'>
                        <li>
                            <a style={textStyles()} className="uk-button uk-button-text uk-button-small uk-text" href="#press" data-uk-scroll>
                                PREMSA
                                    </a>
                        </li>
                    </div>
                    <div className='uk-padding'>
                        <li>
                            <a style={textStyles()} className="uk-button uk-button-text uk-button-small uk-text" href="#contact" data-uk-scroll>
                                CONTACTE
                                    </a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
}
