import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Header />
        <section className="videoSection" id="videos">
        </section>
        <section className="pressSection" id="press">
        </section>
        <section className="contactSection" id="contact">
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
