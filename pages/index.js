import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import i18n from '../utils/i18n'
import styles from '../styles/styles.module.css'

import logic from '../logic/app'

import literals from '../utils/toastLiterals'

import Header from '../components/Header'
import VideoSection from '../components/VideoSection'
import ProjectSection from '../components/ProjectSection'
import PressSection from '../components/PressSection'
import TeamSection from '../components/TeamSection'
import FooterSection from '../components/FooterSection';
import SponsorshipSection from '../components/SponsorshipSection';
import GallerySection from '../components/GallerySection';

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
          </section> 
          <section className="contactSection" id="contact">
            <ContactSection language={language} onContactFrom={handleSendContactForm} />
          </section>*/}
        </main>

        <footer className={styles.footer}>
          <FooterSection language={language} />
        </footer>
        <ToastContainer />
      </div>
    }
  </>
}
