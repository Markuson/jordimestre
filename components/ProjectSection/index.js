import { language } from 'googleapis/build/src/apis/language'
import { useContext } from 'react'

export default function ProjectSection() {

  const lang = useContext(lang)


  return <div className="uk-padding uk-flex uk-flex-column uk-width-1-1">
    <div className="uk-padding uk-width-1-1" data-uk-scrollspy="cls:uk-animation-scale-up; delay: 250; repeat: true">
      <h1 className="uk-padding-small uk-padding-remove-top uk-heading-line uk-text-center"><span>The Project</span></h1>
    </div>
    <div className="uk-padding uk-padding-remove-top uk-flex uk-flex-center">
      <div data-uk-scrollspy="cls:uk-animation-slide-left-small; delay: 250; repeat: true">
        <p className="uk-text-justify">
          Soul Mountain is a project that blends music and mountaineering together, two disciplines that at first sight may not seem related at all.
          However, this is not the case for Jordi Mestre, who has always seen a deep connection between the two, creating his most personal project to
          date thanks to this idea.
          The search for a way to unite these two passions is what brought this Lleida-based musician to create a project that will allow him to play and
          record his compositions on top of his favourite summits in different times of the year, capturing the whole process on video in order to mix the
          sounds with breathtaking images that will bear witness to it.
          Jordi has crafted several instrumental pieces dedicated to these mountains, completing what he defines as the epitome of his artistic expression,
          seeing as mountaineering and mountain skiing have always been forms of art to him.
          Soul Mountain is a unique, original and unprecedented project, since there are no records of anyone ever doing anything like it with an electric
          guitar.
          Its goal is to produce a series of videos featuring self-composed songs using electric or acoustic guitars depending on the mountain they’re
          located in.
          </p>
      </div>
    </div>
  </div>
}
