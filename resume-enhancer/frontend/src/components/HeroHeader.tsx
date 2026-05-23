import styles from "../styles/components/HeroHeader.module.css";

export default function HeroHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.brandRow}>
        <div className={styles.logoCircle}>PE</div>
        <div>
          <h1 className={styles.appName}>Profile Enhancer</h1>
          <p className={styles.tagline}>
            Align your profile to the job in a few focused steps.
          </p>
        </div>
      </div>

      <p className={styles.subtitle}>
        Upload your resume and paste a job description to analyze fit and
        enhance your profile. Additional insights and actions will appear here.
      </p>
    </header>
  );
}