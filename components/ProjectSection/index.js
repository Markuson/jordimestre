import literals from './literals'

export default function ProjectSection({ language }) {

  // const lang = useContext(lang)

  const { title, text } = literals[language]


  return <div className="uk-padding uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay: 250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>{title}</span></h1>
    </div>
    <div className="uk-padding uk-padding-remove-top uk-flex uk-flex-center">
      <div data-uk-scrollspy="cls:uk-animation-slide-left-small; delay: 250; repeat: true">
        <p className="uk-text-justify">
          {text}
        </p>
      </div>
    </div>
  </div>
}
