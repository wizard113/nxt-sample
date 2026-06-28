import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h3>Next.js app service github action 코드 배포4=================</h3>
          <h3>Next.js app service github action 코드 배포5=================</h3>
        </div>
      </main>
    </div>
  );
}
