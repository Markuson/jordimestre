
export default function GallerySection() {

  return <div className="uk-padding uk-padding-remove-horizontal uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-padding-remove-bottom uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay:250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>Gallery</span></h1>
    </div>
    <div className="uk-padding uk-padding-remove-vertical">
      <div data-uk-slideshow="animation: push; autoplay: true">
        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

          <ul className="uk-slideshow-items">
            <li>
              <img id="image1" src="images\foto1.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image2" src="images\foto2.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image3" src="images\foto3.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image4" src="images\foto4.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image5" src="images\foto5.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image6" src="images\foto6.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image7" src="images\foto7.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image8" src="images\foto8.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image9" src="images\foto9.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image10" src="images\foto10.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image11" src="images\foto11.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image12" src="images\foto12.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image13" src="images\foto13.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image14" src="images\foto14.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
            <li>
              <img id="image15" src="images\foto15.jpg" alt="Soul Mountain project" data-uk-cover />
            </li>
          </ul>

          <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
          <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>

        </div>
        <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin uk-visible@s"></ul>
      </div>
    </div>
  </div>
}