import PressGallery from "../PressGallery";

export default function PressSection() {


  return <div className="uk-padding uk-padding-remove-horizontal uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-padding-remove-bottom uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay:250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>Press</span></h1>
    </div>
    <PressGallery />
  </div>
}
