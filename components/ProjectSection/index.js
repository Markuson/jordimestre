import literals from './literals'

export default function ProjectSection({ language }) {

  // const lang = useContext(lang)

  const {
    title,
    text1,
    text2,
    text21,
    text3,
    text4,
    text41,
    text42,
    text5,
    text6,
    text7,
    text71,
    text8,
    text9,
    text91,
    text92,
    text93,
  } = literals[language]


  return <div className="uk-padding uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay: 250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>{title}</span></h1>
    </div>
    <div className="uk-padding uk-padding-remove-top uk-flex uk-flex-center">
      <div data-uk-scrollspy="cls:uk-animation-slide-left-small; delay: 250; repeat: true">
        <p className="uk-margin-remove-bottom uk-text-justify">{text1}</p>
        <p className="uk-text-justify">
          {text2}
          <a href="https://www.instagram.com/jordi_mestre_lopez/?hl=es" className="uk-link-heading" target="_blank" rel="noopener noreferrer">@jordi_mestre_lopez</a>
          {text21}
        </p>
        <p className="uk-text-justify">{text3}</p>
        <p className="uk-margin-remove-vertical uk-text-justify">
          {text4}
          <a className="uk-link-heading" target="_blank" href="https://www.instagram.com/guia.rogerlopezdeharo/" rel="noopener noreferrer">@guia.rogerlopezdeharo</a>
          {text41}
          <a className="uk-link-heading" target="_blank" href="https://www.instagram.com/jordirullo/" rel="noopener noreferrer">@jordirullo</a>
          {text42}
        </p>
        <p className=" uk-text-justify">{text5}</p>
        <p className="uk-margin-remove-vertical uk-text-justify">{text6}</p>
        <p className="uk-text-justify">
          {text7}
          <a className="uk-link-heading uk-text-bolder" target="_blank" href="https://www.vallboi.cat" rel="noopener noreferrer">Vall de Boí</a>
          {text71}
        </p>
        <p className="uk-margin-remove-vertical uk-text-justify">{text8}</p>
        {/* <p className=" uk-text-justify">
          {text9}
          <a className="uk-link-heading uk-text-bolder" target="_blank" href="https://www.fanaticguitars.com/" rel="noopener noreferrer">Fanatic Guitars</a>
          {text91}
          <a className="uk-link-heading uk-text-bolder" target="_blank" href="https://dangelicoguitars.com/" rel="noopener noreferrer">D'Angelico</a>
          {text92}
          <a className="uk-link-heading uk-text-bolder" target="_blank" href="https://www.kilianjornetfoundation.org/" rel="noopener noreferrer">Kilian Jornet Foundation</a>
          {text93}
        </p> */}
        <div className="uk-padding uk-padding-remove-top uk-flex uk-flex-around uk-flex-middle">
          <div className="uk-padding-small uk-padding-remove-bottom">
            <a className="uk-link-reset" target="_blank" href="https://www.fanaticguitars.com/" rel="noopener noreferrer">
              <img id="aralleida" src="sponsors\FanaticGuitars.png" alt="Fanatic Guitars" width="200px" />
            </a>
          </div>
          <div className="uk-padding-small uk-padding-remove-bottom">
            <a className="uk-link-reset" target="_blank" href="https://www.kilianjornetfoundation.org/" rel="noopener noreferrer">
              <img id="aralleida" src="sponsors\KJFoundation.png" alt="Kilian Jornet Foundation" width="400px" />
            </a>
          </div>
          <div className="uk-padding-small uk-padding-remove-bottom">
            <a className="uk-link-reset" target="_blank" href="https://www.vallboi.cat" rel="noopener noreferrer">
              <img id="aralleida" src="sponsors\vallboi.png" alt="Vall de Boí" width="200px" />
            </a>
          </div>
        </div>
        <div className="uk-padding uk-padding-remove-horizontal uk-flex uk-flex-around uk-flex-middle">
          <img id="festivals" src="images\festivals.jpg" alt="seleccionada pels festivals" />
        </div>
      </div>
    </div>
  </div>
}
