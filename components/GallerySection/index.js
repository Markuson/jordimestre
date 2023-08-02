import literals from './literals'

export default function GallerySection({ language }) {

  const { title } = literals[language]

  const handleGalleryWidth = () => {
    return {
      width: "896px",
    }
  }

  return <div className="uk-padding uk-padding-remove-horizontal uk-flex uk-flex-center uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-padding-remove-bottom uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay:250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>{title}</span></h1>
    </div>
    <div className="uk-flex uk-flex-center uk-padding uk-padding-remove-top">
      <div style={handleGalleryWidth()}>
        <div className="uk-slideshow" data-uk-slideshow="animation: push; autoplay: true">
          <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" >

            <ul className="uk-slideshow-items">
              <li>
                <img id="image1" src="images\slide1.jpg" alt="Soul Mountain project" data-uk-cover />
              </li>
              <li>
                <img id="image2" src="images\slide2.jpg" alt="Soul Mountain project" data-uk-cover />
              </li>
              <li>
                <img id="image3" src="images\slide3.jpg" alt="Soul Mountain project" data-uk-cover />
              </li>
              <li>
                <img id="image4" src="images\slide4.jpg" alt="Soul Mountain project" data-uk-cover />
              </li>
              <li>
                <img id="image5" src="images\slide5.jpg" alt="Soul Mountain project" data-uk-cover />
              </li>
              <li>
                <img id="image6" src="images\slide6.jpg" alt="Soul Mountain project" data-uk-cover />
              </li>
              <li>
                <img id="image7" src="images\slide7.jpg" alt="Soul Mountain project" data-uk-cover />
              </li>
              <li>
                <img id="image8" src="images\slide8.jpg" alt="Soul Mountain project" data-uk-cover />
              </li>
              <li>
                <img id="image9" src="images\slide9.jpg" alt="Soul Mountain project" data-uk-cover />
              </li>
              <li>
                <img id="image10" src="images\slide10.jpg" alt="Soul Mountain project" data-uk-cover />
              </li>
            </ul>

            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"> </a>
            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"> </a>

          </div>
          <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin uk-visible@s"></ul>
        </div>
      </div>
    </div>
  </div>
}
