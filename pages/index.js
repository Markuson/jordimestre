import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import i18n from '../utils/i18n'
import styles from '../styles/styles.module.css'

import logic from '../logic/app'

import literals from '../utils/toastLiterals'

import Header from '../components/Header'
import VideoSection from '../components/VideoSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import PressSection from '../components/PressSection'
import TeamSection from '../components/TeamSection'
import FooterSection from '../components/FooterSection';
import SponsorshipSection from '../components/SponsorshipSection';
import GallerySection from '../components/GallerySection';

import UIkit from 'uikit/dist/js/uikit.min.js'

export default function Home() {


  const [language, setLanguage] = useState('en')
  const [langLiterals, setLangLiterals] = useState(literals['en'])


  useEffect(() => {

    if (!i18n.language){
      const _lang = window.navigator.language.slice(0, 2)
      if (_lang == 'ca' || _lang == 'es') {
        i18n.language=_lang
        setLanguage(_lang)
        setLangLiterals(literals[_lang])
      } else {
        i18n.language='en'
        setLanguage('en')
        setLangLiterals(literals['en'])
      }
    }else{
      setLanguage(i18n.language)
    }
    UIkit.modal("#modal-sorteig").show()
  }, [])

  const handleLanguageChange = (_language) => {
    if (_language == 'ca' || _language == 'es') {
      i18n.language=_language
      setLanguage(_language)
      setLangLiterals(literals[_language])
    } else {
      i18n.language='en'
      setLanguage('en')
      setLangLiterals(literals['en'])
    }
  }

  const handleSendContactForm = async (email, subject, text) => {
    try {
      const response = await logic.sendEmail(email, subject, text)
      if (response.status === 'OK') {
        toast.dark(langLiterals.sendSuccess, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.scrollTo(0, 0)
        return 'done'
      } else {
        toast.error(langLiterals.sendError, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return 'errors'
      }

    } catch (error) {
      var _message='Uncaught error'
      if (error.message=='e-mail not valid') _message = langLiterals.errorInvalidEmail
      if (error.message=='email is empty') _message = langLiterals.errorEmptyMail
      if (error.message=='subject is empty') _message = langLiterals.errorEmptySubject
      if (error.message=='text is empty') _message = langLiterals.errorEmptyText
      console.log(_message)
      toast.error(_message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return 'errors'
    }

  }


  return <>
    { language &&
      <div className={styles.container}>
        <main>
          <Header onLanguageChange={handleLanguageChange} language={language}/>
          <section className="projectSection" id="project">
            <ProjectSection language={language} />
          </section>
          <section className="videoSection" id="videos">
            <VideoSection language={language} />
          </section>
          <section className="teamSection" id="team">
            <TeamSection language={language} />
          </section>
          <section className="gallerySection" id="gallery">
            <GallerySection language={language} />
          </section>
          <section className="pressSection" id="press">
            <PressSection language={language} />
          </section>
          {/* <section className="sponsorshipSection" id="sponsorship">
            <SponsorshipSection language={language} />
          </section> */}
          <section className="contactSection" id="contact">
            <ContactSection language={language} onContactFrom={handleSendContactForm} />
          </section>
        </main>

        <footer className={styles.footer}>
          <FooterSection language={language} />
        </footer>
        <ToastContainer />
      </div>
    }

    <div id="modal-sorteig" className="uk-flex-top" data-uk-modal>
      <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical uk-modal-container">
        <button className="uk-modal-close-outside" type="button" data-uk-close></button>
        <div uk-tooltip="title: Pulsa para participar.">
          <a href={"https://www.fanaticguitars.com/blog/sorteamos-una-dangelico-tammany/"} data-caption={"pulsa para entrar al sorteo"} target="blank" rel="noopener noreferrer">
            <img id="sorteo" src="sorteo.jpg" alt="sorteo" width="1000px" />
          </a>
        </div> 
      </div>
    </div>
  </>
}
