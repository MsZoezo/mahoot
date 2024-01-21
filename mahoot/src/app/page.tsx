import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.header}>
      <figure className={styles.logo}><img src="/ma-logo.png" alt="Mediacollege Amsterdam Logo" /></figure>

      <h1 className={styles.title}><span className={styles.MA}>MA</span><span>hoot</span></h1>
      {/* <p>Worden wie je bent</p> */}
      <Link href="/play" className={styles.link}>Join quiz!</Link>
      <Link href="/host" className={styles.link} id={styles.host}>Host quiz</Link>
    </div>
  );
}
