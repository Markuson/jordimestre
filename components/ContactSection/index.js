import { useRef, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import literals from './literals'

export default function ContactSection({ 
  language,
  onContactFrom
}) {

  const { title, emailPlaceholder, subjectPlaceholder, messagePlaceholder, send, acceptRecaptcha } = literals[language]

  const recaptchaRef = useRef(null);
  const [recaptchaOK, setRecaptchaOK] = useState(false)

  const handleRecaptchaOK = () => {
    setRecaptchaOK(true)
  }

  const handleRecaptchaKO = () => {
    setRecaptchaOK(false)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let response = ''
    const { email, subject, text } = e.target;
    (async () => {
      response = await onContactFrom(email.value, subject.value, text.value)
      if (response ==='done'){
        email.value = ""
        subject.value = ""
        text.value = ""
      }
    })();
    recaptchaRef.current.reset()
    handleRecaptchaKO()
  }

  return <div className="uk-padding uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-padding-remove-bottom  uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay:250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>{title}</span></h1>
    </div>
    <div data-uk-scrollspy="cls:uk-animation-fade; delay:250; repeat: true">
      <form className="uk-width-1-1 uk-padding uk-padding-remove-top uk-flex uk-flex-center" onSubmit={(e) => handleSubmit(e)}>
        <fieldset className=" uk-width-1-1 uk-fieldset">
          <div className="uk-margin">
            <input id="email" className="uk-input" type="email" placeholder={emailPlaceholder} />
          </div>

          <div className="uk-margin">
            <input id="subject" className="uk-input" type="text" placeholder={subjectPlaceholder} />
          </div>

          <div className="uk-margin">
            <textarea id="text" className="uk-textarea" rows="5" placeholder={messagePlaceholder}></textarea>
          </div>
          <div className="uk-flex uk-flex-center ">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaOK}
              onExpired={handleRecaptchaOK}
              onErrored={handleRecaptchaKO}
            />

          </div>
          <div className="uk-margin uk-text-center">
            {recaptchaOK && <button className="uk-button uk-button-default">{send}</button>}
            {!recaptchaOK && <button className="uk-button uk-button-default" disabled data-uk-tooltip={acceptRecaptcha}>{send}</button>}
          </div>
        </fieldset>
      </form>
    </div>
  </div>
}
