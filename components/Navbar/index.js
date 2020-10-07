import styles from '../../styles/styles.module.css'

export default function Navbar() {

    const navbarStyles = () => {
        return {
            zIndex: "1000"
        }
    }

    return <div className="uk-visible@m">
        <div data-uk-sticky="sel-target: .uk-navbar-container;  top: .uk-navbar-container; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up; cls-inactive: uk-navbar-transparent; cls-active: navbar">
            <nav id="navbar" className="uk-width-1-1 uk-navbar-container uk-dark uk-position-top uk-position-z-index" data-uk-navbar data-uk-scrollspy="cls:uk-animation-fade ">
                <div className="uk-navbar-left uk-padding-small">
                    <div className="uk-padding uk-padding-remove-vertical">
                        <img className="logo" src='logo.png' alt="soulmountain" width="200px" />
                    </div>
                </div>
                <div className="uk-navbar-right uk-padding uk-padding-remove-vertical">
                    <ul className="uk-navbar-nav">
                        <div className='uk-padding-small'>
                            <li className='uk-active'>
                                <a className={styles.hvrPulseGrow} target="_blank" href="https://www.instagram.com/jordi_mestre_lopez/" >
                                    <img src='icons/instagram.png' width="30px" />
                                </a>
                            </li>
                        </div>
                        <div className='uk-padding-small'>
                            <li>
                                <a className={styles.hvrPulseGrow} target="_blank" href="https://www.youtube.com/channel/UCV3HknII0tr9Xgrm29cxYFA/featured" >
                                    <img src='icons/youtube.png' width="30px" />
                                </a>
                            </li>
                        </div>
                        <div className='uk-padding-small'>
                            <li>
                                <a className={styles.hvrPulseGrow} href="#contact" data-uk-scroll>
                                    <img src='icons/mail.png' width="30px" />
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
}
