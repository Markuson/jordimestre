import { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar'

export default function Header() {

  const [imageIndex, setImageIndex] = useState(0)

  const childrenRef = useRef(null)
  const parentRef = useRef(null)

  const totalImages = 20

  useEffect(() => {
    let childrenHeight = 0
    if (childrenRef.current) {
      childrenHeight = childrenRef.current.offsetHeight;
    }
    if (parentRef.current) {
      parentRef.current.offsetHeight = childrenHeight
    }

  }, [childrenRef]);

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
    <Navbar />
    <div ref={childrenRef}>
      <img className="uk-animation-fade" hidden={imageIndex == 0 ? false : true} id="image0" src="images\foto0.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 1 ? false : true} id="image1" src="images\foto1.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 2 ? false : true} id="image1" src="images\foto2.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 3 ? false : true} id="image1" src="images\foto3.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 4 ? false : true} id="image1" src="images\foto4.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 5 ? false : true} id="image1" src="images\foto5.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 6 ? false : true} id="image1" src="images\foto6.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 7 ? false : true} id="image1" src="images\foto7.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 8 ? false : true} id="image1" src="images\foto8.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 9 ? false : true} id="image1" src="images\foto9.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 10 ? false : true} id="image1" src="images\foto10.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 11 ? false : true} id="image1" src="images\foto11.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 12 ? false : true} id="image1" src="images\foto12.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 13 ? false : true} id="image1" src="images\foto13.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 14 ? false : true} id="image1" src="images\foto14.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 15 ? false : true} id="image1" src="images\foto15.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 16 ? false : true} id="image1" src="images\foto16.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 17 ? false : true} id="image1" src="images\foto17.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 18 ? false : true} id="image1" src="images\foto18.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 19 ? false : true} id="image1" src="images\foto19.jpg" alt="foto principal" />
      <img className="uk-animation-fade" hidden={imageIndex == 20 ? false : true} id="image1" src="images\foto20.jpeg" alt="foto principal" />
    </div>
    <div className="uk-hidden@m uk-flex uk-fex-center" data-uk-scrollspy="cls:uk-animation-fade; delay:150;">
      <div className="uk-width-1-1 uk-text-center">
        <img className="logo" src='logo.png' alt="soulmountain" width="490px" />
      </div>
    </div>
    <div className="uk-hidden@m uk-flex uk-flex-center" data-uk-scrollspy="cls:uk-animation-scale-up; delay:250;">
      <div className='uk-padding uk-padding-remove-vertical'>
        <a target="_blank" href="https://www.instagram.com/jordi_mestre_lopez/" >
          <img src='icons/instagram.png' width="30px" />
        </a>
      </div>
      <div className='uk-padding uk-padding-remove-vertical'>
        <a target="_blank" href="https://www.youtube.com/channel/UCV3HknII0tr9Xgrm29cxYFA/featured" >
          <img src='icons/youtube.png' width="30px" />
        </a>
      </div>
      <div className='uk-padding uk-padding-remove-vertical'>
        <a href="#contact" data-uk-scroll>
          <img src='icons/mail.png' width="30px" />
        </a>
      </div>
    </div>
  </div>
}
