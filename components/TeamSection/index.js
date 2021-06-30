import literals from './literals'

export default function TeamSection({ language }) {

  const { title, jordiMestreText1, jordiMestreText2, jordiMestreText3, jordiMestreTitle, jordiRulloText1, jordiRulloText2, jordiRulloText3, jordiRulloText4, jordiRulloTitle, rogerLopezText, rogerLopezTitle } = literals[language]

  return <div className="uk-padding uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-padding-remove-bottom uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay: 250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>{title}</span></h1>
    </div>
    <div className="uk-padding uk-padding-remove-top uk-flex uk-flex-center">
      <div>
        <div className="uk-padding-small uk-padding-remove-horizontal" data-uk-scrollspy="cls:uk-animation-slide-right-small; delay: 250; repeat: true">
          <div className="uk-text-center uk-margin-bottom">
            <img className="uk-animation-fade" id="team" src="images\team.jpg" alt="Soul Mountain team" width="896px" height="597px" />
          </div>
          <div className=" uk-margin-top uk-flex-inline uk-flex-middle uk-text-middle">
            <h3 className="uk-margin-remove-vertical">
              Jordi Mestre
            </h3>
            <span className="uk-padding-small uk-padding-remove-vertical uk-text-center uk-text-muted">{jordiMestreTitle}</span>
          </div>
          <p className="uk-margin-remove-bottom uk-text-justify">{jordiMestreText1}</p>
          <p className="uk-margin-remove-vertical uk-text-justify">{jordiMestreText2}</p>
          <p className="uk-margin-remove-top uk-margin-medium-bottom uk-text-justify">{jordiMestreText3}</p>
          <div className="uk-flex-inline uk-flex-middle uk-text-middle">
            <h3 className="uk-margin-remove-vertical">
              Roger López de Haro
            </h3>
            <span className="uk-padding-small uk-padding-remove-vertical uk-text-center uk-text-muted">{rogerLopezTitle}</span>
          </div>
          <p className="uk-margin-medium-bottom uk-text-justify">
            {rogerLopezText}
            <a className="uk-link-heading" target="_blank" href="https://www.instagram.com/guia.rogerlopezdeharo/" rel="noopener noreferrer"> (@guia.rogerlopezdeharo)</a>
          </p>
          <div className="uk-flex-inline uk-flex-middle uk-text-middle">
            <h3 className="uk-margin-remove-vertical">
              <a className="uk-link-heading" target="_blank" href="http://jordirullo.com/" rel="noopener noreferrer">
                Jordi Rulló
            </a>
            </h3>
            <span className="uk-padding-small uk-padding-remove-vertical uk-text-center uk-text-muted">{jordiRulloTitle}</span>

          </div>
          <p className="uk-margin-remove-bottom uk-text-justify">{jordiRulloText1}</p>
          <p className="uk-margin-remove-vertical uk-text-justify">{jordiRulloText2}</p>
          <p className="uk-margin-remove-top uk-text-justify">
            {jordiRulloText3}<a className="uk-link-heading" target="_blank" href="https://www.bluecollectors.com/" rel="noopener noreferrer">Blue Collectors</a>{jordiRulloText4}
            <a className="uk-link-heading" target="_blank" href="https://www.instagram.com/indiboix/" rel="noopener noreferrer"> (@indiboix)</a>
          </p>
        </div>
      </div>
    </div>
  </div>
}
