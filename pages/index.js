import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <img src="/logo-placeholder.png" alt="Logo" />   {/* You can replace this with your logo once it's ready */}
        </div>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      
      <main className={styles.main}>
        <h1 className={styles.title}>Connecting Software Engineer Applicants with Company Employees.</h1>
        <div>
          <Link href="/applicant"><button>Applicant Portal</button></Link>
          <Link href="/employee"><button>Employee Portal</button></Link>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <p>© 2023 Software Bridge App. All rights reserved.</p>
        <Link href="/feedback">Feedback</Link>
      </footer>
    </div>
  )
}
