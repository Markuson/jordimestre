import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import styles from '../styles/styles.module.css'

import logic from '../logic/app'

import { Context } from '../components/Context';

import Header from '../components/Header'
import VideoSection from '../components/VideoSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import PressSection from '../components/PressSection'
import TeamSection from '../components/TeamSection'
import FooterSection from '../components/FooterSection';
import SponsorshipSection from '../components/SponsorshipSection';
import GallerySection from '../components/GallerySection';

export default function Home() {

  const [lang, setLanguage] = useState('en')

  useEffect(() => {
    const _lang = window.navigator.language.slice(0, 2)
    console.log(_lang)
    if (_lang == 'ca' || _lang == 'ca'){
      setLanguage(_lang)
    }else{
      setLanguage('en')
    }
    console.log(lang)
  }, [lang])

  const handleSendContactForm = async (email, subject, text) => {
    try {
      const response = await logic.sendEmail(email, subject, text)
      if (response.status === 'OK') {
        toast.dark('Email sent, we will reply you as soon as possible', {
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
        toast.error('sorry, an error has occurred. Try again or send an email to soulmountain.jordi@gmail.com', {
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
      toast.error(error.message, {
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

  const api = {
    lang
  };

  return (
    <div className={styles.container}>
      <Context.Provider value={api}>
        <main>
          <Header />
          <section className="projectSection" id="project">
            <ProjectSection />
          </section>
          <section className="videoSection" id="videos">
            <VideoSection />
          </section>
          <section className="teamSection" id="team">
            <TeamSection />
          </section>
          <section className="gallerySection" id="gallery">
            <GallerySection />
          </section>
          <section className="pressSection" id="press">
            <PressSection />
          </section>
          <section className="sponsorshipSection" id="sponsorship">
            <SponsorshipSection />
          </section>
          <section className="contactSection" id="contact">
            <ContactSection onContactFrom={handleSendContactForm} />
          </section>
        </main>

        <footer className={styles.footer}>
          <FooterSection />
        </footer>
        <ToastContainer />
      </Context.Provider>
    </div>
  )
}
