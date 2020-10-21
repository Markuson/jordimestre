
export default function TeamSection() {


  return <div className="uk-padding uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-padding-remove-bottom uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay: 250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>The Team</span></h1>
    </div>
    <div className="uk-padding uk-padding-remove-top uk-flex uk-flex-center">
      <div>
        <div className="uk-padding-small uk-padding-remove-horizontal" data-uk-scrollspy="cls:uk-animation-slide-right-small; delay: 250; repeat: true">
          <div className="uk-text-center uk-margin-bottom">
            <img className="uk-animation-fade" id="team" src="images\team.jpg" alt="Soul Mountain team" />
          </div>
          <div className=" uk-margin-top uk-flex-inline uk-flex-middle uk-text-middle">
            <h3 className="uk-margin-remove-vertical">
              Jordi Mestre 
            </h3>
            <span className="uk-padding-small uk-padding-remove-vertical uk-text-muted"> (music & original idea)</span>
          </div>
          <p className="uk-margin-medium-bottom uk-text-justify">
            Jordi Mestre is a musician that honed his skills at ESEM - Taller de Músics de Barcelona. He is part of several well-known musical projects in the
            region of Lleida such as Pixie Dixie, Sonsonite and Food4Soul. He has also been part of bands and projects like Barcelona Ghana Revolution
            (including an African tour), Orgàsmic Quintet, Ignasi González Trio, The Crossfathers...
            His music is mostly based on genres of african-american origins such as jazz, soul, blues and hip-hop; and he’s always been interested in African
            rooted music.
            He is also a member of the organization for the Camping Jazz Senterada seminar, which takes place in the Vall Fosca region.
          </p>
          <div className="uk-flex-inline uk-flex-middle uk-text-middle">
            <h3 className="uk-margin-remove-vertical">
              Roger López de Haro
            </h3>
            <span className="uk-padding-small uk-padding-remove-vertical uk-text-muted">(mountain guide)</span>
          </div>
          <p className="uk-margin-medium-bottom uk-text-justify">
            Roger is a widely respected figure in the mountaineering world. His passion and dedication to rocks, ice and snow included him in one of the first
            generations of mountaineering guides in his country. He also trains climbers and alpine technicians, and is part of the ZAG, Marmot and POC
            pro teams.
          </p>
          <div className="uk-flex-inline uk-flex-middle uk-text-middle">
          <h3 className="uk-margin-remove-vertical">
            <a className="uk-link-heading" target="_blank" href="http://jordirullo.com/" rel="noopener noreferrer">
              Jordi Rulló
            </a>
          </h3>
            <span className="uk-padding-small uk-padding-remove-vertical uk-text-muted">(audiovisual producer)</span>

          </div>
          <p className="uk-text-justify">
            Jordi Rulló splits his time between the city of Lleida and the Catalan Pyrenees, where he works as a guide and photographer. After nearly fifteen
            years working on extreme sports as a kayak, rafting, skiing and snowboarding instructor; he decided to study photography and has combined
            all those disciplines ever since. Visit <a className="uk-link-heading" target="_blank" href="http://jordirullo.com/" rel="noopener noreferrer"> jordirullo.com</a> for more info.
          </p>
        </div>
      </div>
    </div>
  </div>
}
