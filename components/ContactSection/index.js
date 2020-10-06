
export default function ContactSection() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return <div className="uk-padding uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-padding-remove-bottom  uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay:250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>Contact</span></h1>
    </div>
    <div data-uk-scrollspy="cls:uk-animation-fade; delay:250; repeat: true">
      <form className="uk-width-1-1 uk-padding uk-padding-remove-top uk-flex uk-flex-center" onSubmit={(e) => handleSubmit(e)}>
        <fieldset className=" uk-width-1-1 uk-fieldset">
          <div className="uk-margin">
            <input className="uk-input" type="email" placeholder="Your email" />
          </div>

          <div className="uk-margin">
            <input className="uk-input" type="text" placeholder="Subject" />
          </div>

          <div className="uk-margin">
            <textarea className="uk-textarea" rows="5" placeholder="Message"></textarea>
          </div>
          <div className="uk-margin uk-text-center">
            <button className="uk-button uk-button-default">Send</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
}
