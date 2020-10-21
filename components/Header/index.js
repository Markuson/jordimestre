import { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar'

export default function Header() {

  const [imageIndex, setImageIndex] = useState(0)

  const childrenRef = useRef(null)
  const parentRef = useRef(null)

  const totalImages = 4

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
      <img className="uk-animation-fade" hidden={imageIndex == 0 ? false : true} id="image0" src="images\foto0.jpg" alt="Soul Mountain project" />
      {/* <img className="uk-animation-fade" hidden={imageIndex == 1 ? false : true} id="image1" src="images\foto1.jpg" alt="Soul Mountain project" /> */}
      <img className="uk-animation-fade" hidden={imageIndex == 1 ? false : true} id="image2" src="images\foto2.jpg" alt="Soul Mountain project" />
      {/* <img className="uk-animation-fade" hidden={imageIndex == 3 ? false : true} id="image3" src="images\foto3.jpg" alt="Soul Mountain project" /> */}
      {/* <img className="uk-animation-fade" hidden={imageIndex == 4 ? false : true} id="image4" src="images\foto4.jpg" alt="Soul Mountain project" /> */}
      {/* <img className="uk-animation-fade" hidden={imageIndex == 5 ? false : true} id="image5" src="images\foto5.jpg" alt="Soul Mountain project" /> */}
      <img className="uk-animation-fade" hidden={imageIndex == 2 ? false : true} id="image6" src="images\foto6.jpg" alt="Soul Mountain project" />
      <img className="uk-animation-fade" hidden={imageIndex == 3 ? false : true} id="image7" src="images\foto7.jpg" alt="Soul Mountain project" />
      {/* <img className="uk-animation-fade" hidden={imageIndex == 8 ? false : true} id="image8" src="images\foto8.jpg" alt="Soul Mountain project" /> */}
      {/* <img className="uk-animation-fade" hidden={imageIndex == 9 ? false : true} id="image9" src="images\foto9.jpg" alt="Soul Mountain project" /> */}
      {/* <img className="uk-animation-fade" hidden={imageIndex == 10 ? false : true} id="image10" src="images\foto10.jpg" alt="Soul Mountain project" /> */}
      {/* <img className="uk-animation-fade" hidden={imageIndex == 11 ? false : true} id="image11" src="images\foto11.jpg" alt="Soul Mountain project" /> */}
      {/* <img className="uk-animation-fade" hidden={imageIndex == 12 ? false : true} id="image12" src="images\foto12.jpg" alt="Soul Mountain project" /> */}
      <img className="uk-animation-fade" hidden={imageIndex == 4 ? false : true} id="image13" src="images\foto13.jpg" alt="Soul Mountain project" />
      {/* <img className="uk-animation-fade" hidden={imageIndex == 14 ? false : true} id="image14" src="images\foto14.jpg" alt="Soul Mountain project" /> */}
      {/* <img className="uk-animation-fade" hidden={imageIndex == 15 ? false : true} id="image15" src="images\foto15.jpg" alt="Soul Mountain project" /> */}
      {/* <img className="uk-animation-fade" hidden={imageIndex == 16 ? false : true} id="image16" src="images\foto16.jpg" alt="Soul Mountain project" /> */}
      {/* <img className="uk-animation-fade" hidden={imageIndex == 17 ? false : true} id="image17" src="images\foto17.jpg" alt="Soul Mountain project" /> */}
      {/* <img className="uk-animation-fade" hidden={imageIndex == 18 ? false : true} id="image18" src="images\foto18.jpg" alt="Soul Mountain project" /> */}
      {/* <img className="uk-animation-fade" hidden={imageIndex == 19 ? false : true} id="image19" src="images\foto19.jpg" alt="Soul Mountain project" /> */}
    </div>
    <div className="uk-hidden@l uk-flex uk-fex-center logoMobile" data-uk-scrollspy="cls:uk-animation-fade; delay:150;">
      <div className="uk-width-1-1 uk-text-center">
        <img className="logo" src='logo.png' alt="soulmountain" width="690px" />
      </div>
    </div>
    <div className="uk-hidden@l uk-flex uk-flex-center logoMobile" data-uk-scrollspy="cls:uk-animation-scale-up; delay:250;">
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
  </div>
}
