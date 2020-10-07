import Card from "../Card";

export default function PressSection() {


  return <div className="uk-padding uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-padding-remove-bottom uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay:250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>Press</span></h1>
    </div>
    <div className="uk-visible@s uk-padding uk-padding-remove-top uk-flex uk-flex-center">
      <div className="uk-padding uk-padding-remove-vertical" data-uk-scrollspy="cls:uk-animation-slide-bottom-medium; delay: 250; repeat: true">
        <Card description="La Mañana" href="documents\LaManyana.pdf" id="laManyana" src="pressImages\laManyanaImage.jpg" width="200px"/>
      </div>
      <div className="uk-padding uk-padding-remove-vertical" data-uk-scrollspy="cls:uk-animation-slide-top-medium; delay: 250; repeat: true">
        <Card description="Lectura (diari Segre)" href="documents\SegreLectura.pdf#page=30" id="Segre" src="pressImages\segreImage.jpg" width="200px"/>
      </div>
    </div>
    <div className="uk-hidden@s uk-padding uk-padding-remove-vertical uk-flex uk-flex-column">
      <div className="uk-padding-large uk-padding-remove-top" data-uk-scrollspy="cls:uk-animation-slide-bottom-medium; delay: 250; repeat: true">
        <Card description="La Mañana" href="documents\LaManyana.pdf" id="laManyana" src="pressImages\laManyanaImage.jpg" width="400px"/>
      </div>
      <div className="uk-padding-large uk-padding-remove-top" data-uk-scrollspy="cls:uk-animation-slide-top-medium; delay: 250; repeat: true">
        <Card description="Lectura (diari Segre)" href="documents\SegreLectura.pdf#page=30" id="Segre" src="pressImages\segreImage.jpg" width="400px"/>
      </div>
    </div>
  </div>
}
