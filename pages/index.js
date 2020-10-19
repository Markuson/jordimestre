import styles from '../styles/styles.module.css'
import Header from '../components/Header'
import VideoSection from '../components/VideoSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import PressSection from '../components/PressSection'
import TeamSection from '../components/TeamSection'

export default function Home() {
  return (
    <div className={styles.container}>
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
        <section className="pressSection" id="press">
          <PressSection />
        </section>
        <section className="contactSection" id="contact">
          <ContactSection />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          footer
        </p>
      </footer>
    </div>
  )
}
