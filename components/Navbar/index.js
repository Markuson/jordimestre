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
                        <img className="logo" src='logo.png' alt="soulmountain" width="200px" height="100px" />
                    </div>
                </div>
                <div className="uk-navbar-right uk-padding uk-padding-remove-vertical">
                    <ul className="uk-navbar-nav">
                        <li className='uk-active'>
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
