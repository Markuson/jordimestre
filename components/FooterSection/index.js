import literals from './literals'

export default function FooterSection({language}) {
  
  const { photosBy, webBy } = literals[language]

  return <div className="uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-visible@s uk-flex uk-flex-center uk-flex-middle uk-width-1-1">
      <div className="uk-padding uk-padding-remove-bottom">
        <img id="mestre" src="sponsors\mestre.png" alt="mestre" width="120px"/>
      </div>
      <div className="uk-padding uk-padding-remove-bottom">
        <img id="mono" src="sponsors\mono.png" alt="mono" width="120px"/>
      </div>
      <div className="uk-padding uk-padding-remove-bottom">
        <img id="aralleida" src="sponsors\aralleida.png" alt="ara lleida" width="180px"/>
      </div>
      <div className="uk-padding uk-padding-remove-bottom">
        <img id="cusart" src="sponsors\cusart.png" alt="cusart" width="70px"/>
      </div>
      <div className="uk-padding uk-padding-remove-bottom">
        <img id="cortazu" src="sponsors\cortazu.png" alt="cusart" width="70px"/>
      </div>
    </div>
    <div className="uk-hidden@s uk-flex uk-flex-center uk-flex-middle  uk-width-1-1">
      <div className="uk-padding-small uk-padding-remove-bottom">
        <img id="mestre" src="sponsors\mestre.png" alt="mestre" width="120px"/>
      </div>
      <div className="uk-padding-small uk-padding-remove-bottom">
        <img id="mono" src="sponsors\mono.png" alt="mono" width="120px"/>
      </div>
      <div className="uk-padding-small uk-padding-remove-bottom">
        <img id="aralleida" src="sponsors\aralleida.png" alt="ara lleida" width="180px"/>
      </div>
      <div className="uk-padding-small uk-padding-remove-bottom">
        <img id="cusart" src="sponsors\cusart.png" alt="cusart" width="70px"/>
      </div>
      <div className="uk-padding-small uk-padding-remove-bottom">
        <img id="cortazu" src="sponsors\cortazu.png" alt="cortazu" width="70px"/>
      </div>
    </div>
    <hr/>
    <div className="uk-hidden@m uk-flex uk-flex-center" data-uk-scrollspy="cls:uk-animation-scale-up; delay:250;">
      <div className='uk-padding-small uk-padding-remove-top'>
        <a target="_blank" href="https://www.instagram.com/jordi_mestre_lopez/" rel="noopener noreferrer">
          <img src='icons/instagram.png' width="30px" alt="instagram" />
        </a>
      </div>
      <div className='uk-padding-small uk-padding-remove-top'>
        <a target="_blank" href="https://www.youtube.com/channel/UCV3HknII0tr9Xgrm29cxYFA/featured" rel="noopener noreferrer">
          <img src='icons/youtube.png' width="30px" alt="youtube" />
        </a>
      </div>
    </div>
    <div className="uk-padding uk-padding-remove-top uk-flex uk-flex-middle uk-flex-center uk-width-1-1">
      <div className="uk-text-center">
        <p className="uk-margin-small uk-text-small uk-text-muted">{photosBy}<a className="uk-link-heading" target="_blank" href="http://jordirullo.com/" rel="noopener noreferrer">jordirullo.com</a> </p>
      </div>
      <div className="uk-padding-large uk-padding-remove-vertical">
        <p className="uk-margin-small uk-text-small uk-text-muted">|</p>
      </div>
      <div className="uk-text-center">
        <p className="uk-margin-small uk-text-small uk-text-muted">{webBy}<a className="uk-link-heading" href="mailto:info@marcuson.dev" rel="noopener noreferrer">info@marcuson.dev</a></p>
      </div>
    </div>
  </div>
}
