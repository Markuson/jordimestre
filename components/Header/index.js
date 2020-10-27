import { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar'
import LanguageSelect from '../LanguageSelect'

export default function Header({ onLanguageChange, language }) {

  const [imageIndex, setImageIndex] = useState(0)

  const totalImages = 4

  useEffect(() => {
    const interval = setInterval(() => {
      var newIndex = 0
      if (imageIndex < totalImages) {
        newIndex = imageIndex + 1
      }
      setImageIndex(newIndex)
    }, 10000)


    return () => {
      clearInterval(interval)
    }
  }, [imageIndex])

  return <div >
    <Navbar onLanguageChange={onLanguageChange} language={language} />
    <div >
      <img className="uk-animation-fade" hidden={imageIndex == 0 ? false : true} id="slide0" src="images\slide0.jpg" alt="Soul Mountain project" />
      <img className="uk-animation-fade" hidden={imageIndex == 1 ? false : true} id="slide1" src="images\slide1.jpg" alt="Soul Mountain project" />
      <img className="uk-animation-fade" hidden={imageIndex == 2 ? false : true} id="slide2" src="images\slide2.jpg" alt="Soul Mountain project" />
      <img className="uk-animation-fade" hidden={imageIndex == 3 ? false : true} id="slide3" src="images\slide3.jpg" alt="Soul Mountain project" />
      <img className="uk-animation-fade" hidden={imageIndex == 4 ? false : true} id="slide4" src="images\slide4.jpg" alt="Soul Mountain project" />
    </div>
    <div className="uk-hidden@l uk-flex uk-fex-center logoMobile" >
      <div className="uk-width-1-1 uk-text-center">
        <img className="logo" src='logo.png' alt="soulmountain" width="690px" />
      </div>
    </div>
    <div className="uk-hidden@l uk-flex uk-flex-center logoMobile" >
      <div className='uk-padding uk-padding-remove-vertical'>
        <a target="_blank" href="https://www.instagram.com/jordi_mestre_lopez/" rel="noopener noreferrer">
          <img src='icons/instagram.png' width="30px" alt="instagram" />
        </a>
      </div>
      <div className='uk-padding uk-padding-remove-vertical'>
        <a target="_blank" href="https://www.youtube.com/channel/UCV3HknII0tr9Xgrm29cxYFA/featured" rel="noopener noreferrer">
          <img src='icons/youtube.png' width="30px" alt="youtube" />
        </a>
      </div>
      <div className='uk-padding uk-padding-remove-vertical'>
        <a href="#contact" rel="noopener noreferrer" data-uk-scroll>
          <img src='icons/mail.png' width="30px" alt="contactMe" />
        </a>
      </div>
    </div>
    <div className="uk-hidden@l uk-flex uk-fex-center logoMobile" >
      <div className="uk-padding uk-padding-remove-bottom uk-width-1-1 uk-text-center">
        <LanguageSelect language={language} onLanguageChange={onLanguageChange} />

      </div>
    </div>
  </div>
}
