import styles from "../styles/components/HeroHeader.module.css";

export default function HeroHeader() {
  return (
    <header className={styles.header}>
      <p className={styles.badge}>Profile Enhancer</p>
      <h1 className={styles.title}>Improve your profile with job-fit insights</h1>
      <p className={styles.subtitle}>
        Upload your resume or profile document and paste a job description to
        get started. Analysis and enhancement content will appear here later.
      </p>
    </header>
  );
}