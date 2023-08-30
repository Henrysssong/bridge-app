import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      const headerElem = document.querySelector(`.${styles.header}`);
      const mainElem = document.querySelector(`.${styles.main}`);
      const footerElem = document.querySelector(`.${styles.footer}`);
     
      if (headerElem) {
        headerElem.classList.add("active");
        setTimeout(() => {
          if (mainElem) {
            mainElem.classList.add("active");
            setTimeout(() => {
              if (footerElem) {
                footerElem.classList.add("active");
              }
            }, 300);
          }
        }, 300);
      }
    }, 300);
  }, []);

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
      
      <h1 className={styles.title}>Connecting Software Engineer Applicants with Company Employees.</h1>
      
      <main className={styles.main}>
        <div className={styles.portal}>
          <div className={styles.applicant}>
            <img src="/applicant-image-placeholder.jpg" alt="Applicant" />
            <p>For software engineers seeking employment opportunities.</p>
            <Link href="/applicant"><button>Applicant Portal</button></Link>
          </div>
          <div className={styles.employee}>
            <img src="/employee-image-placeholder.jpg" alt="Employee" />
            <p>For company employees looking to connect with potential hires.</p>
            <Link href="/employee"><button>Employee Portal</button></Link>
          </div>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <p>© 2023 Software Bridge App. All rights reserved.</p>
        <Link href="/feedback">Feedback</Link>
      </footer>
    </div>
  );
}
