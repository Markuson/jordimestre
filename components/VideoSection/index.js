
import literals from './literals'

export default function VideoSection({ language }) {

  const { title } = literals[language]

  return <div className="uk-padding uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-padding-remove-bottom uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay:250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>{title}</span></h1>
    </div>
    <div data-uk-scrollspy="cls:uk-animation-slide-bottom-medium; delay: 250; repeat: true">
      <div className=" uk-padding-large uk-padding-remove-horizontal uk-padding-remove-top uk-flex uk-flex-center">
        <iframe width="896" height="504" src="https://www.youtube.com/embed/6lIk4lwdG7Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen data-uk-responsive></iframe>
      </div>
    </div>
    <div className=" uk-padding uk-padding-remove-horizontal uk-flex uk-flex-center">
      <div data-uk-scrollspy="cls:uk-animation-slide-bottom-medium; delay: 250; repeat: true">
        <iframe width="896" height="504" src="https://www.youtube.com/embed/d_aAD_lvWlE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen data-uk-responsive></iframe>
      </div>
    </div>
  </div>
}
