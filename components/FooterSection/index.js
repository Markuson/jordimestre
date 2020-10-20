export default function FooterSection() {


  return <div className="uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-visible@s uk-flex uk-flex-center uk-width-1-1">
      <div className="uk-padding uk-padding-remove-bottom">
        <img id="mestre" src="sponsors\mestre.png" alt="mestre" width="120px"/>
      </div>
      <div className="uk-padding uk-padding-remove-bottom">
        <img id="marmot" src="sponsors\marmot.png" alt="marmot" width="120px"/>
      </div>
      <div className="uk-padding uk-padding-remove-bottom">
        <img id="harmony" src="sponsors\harmony.png" alt="harmony guitars" width="120px"/>
      </div>
      <div className="uk-padding uk-padding-remove-bottom">
        <img id="mono" src="sponsors\mono.png" alt="mono" width="120px"/>
      </div>
    </div>
    <div className="uk-hidden@s uk-flex uk-flex-center uk-width-1-1">
      <div className="uk-padding-small uk-padding-remove-bottom">
        <img id="mestre" src="sponsors\mestre.png" alt="mestre" width="120px"/>
      </div>
      <div className="uk-padding-small uk-padding-remove-bottom">
        <img id="marmot" src="sponsors\marmot.png" alt="marmot" width="120px"/>
      </div>
      <div className="uk-padding-small uk-padding-remove-bottom">
        <img id="harmony" src="sponsors\harmony.png" alt="harmony guitars" width="120px"/>
      </div>
      <div className="uk-padding-small uk-padding-remove-bottom">
        <img id="mono" src="sponsors\mono.png" alt="mono" width="120px"/>
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
        <p className="uk-margin-small uk-text-small uk-text-muted">Photos by Jordi Rulló. Visit: jordirullo.com </p>
      </div>
      <div className="uk-padding-large uk-padding-remove-vertical">
        <p className="uk-margin-small uk-text-small uk-text-muted">|</p>
      </div>
      <div className="uk-text-center">
        <p className="uk-margin-small uk-text-small uk-text-muted">Website by Marc Usón. Info: info@marcuson.dev</p>
      </div>
    </div>
  </div>
}