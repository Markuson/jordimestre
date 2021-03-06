import literals from './literals'

export default function ProjectSection({ language }) {

  // const lang = useContext(lang)

  const { title, text1, text2, text3, text4, text5, text6, } = literals[language]


  return <div className="uk-padding uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay: 250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>{title}</span></h1>
    </div>
    <div className="uk-padding uk-padding-remove-top uk-flex uk-flex-center">
      <div data-uk-scrollspy="cls:uk-animation-slide-left-small; delay: 250; repeat: true">
        <p className="uk-margin-remove-bottom uk-text-justify">{text1}</p>
        <p className="uk-margin-remove-vertical uk-text-justify">{text2}</p>
        <p className="uk-margin-remove-vertical uk-text-justify">{text3}</p>
        <p className="uk-margin-remove-vertical uk-text-justify">{text4}</p>
        <p className="uk-margin-remove-vertical uk-text-justify">{text5}</p>
        <p className="uk-margin-remove-vertical uk-text-justify">{text6}</p>
      </div>
    </div>
  </div>
}
