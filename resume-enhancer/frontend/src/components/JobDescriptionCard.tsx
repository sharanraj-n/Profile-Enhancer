import styles from "../styles/components/JobDescriptionCard.module.css";

type Props = {
  jobDescription: string;
  setJobDescription: React.Dispatch<React.SetStateAction<string>>;
};

export default function JobDescriptionCard({
  jobDescription,
  setJobDescription,
}: Props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Job Description</h2>
      <p className={styles.helper}>
        Paste the role requirements here. We’ll use this to compare skills,
        keywords, and experience fit.
      </p>

      <textarea
        className={styles.textarea}
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the job description here..."
      />

      <div className={styles.footer}>
        <span>{jobDescription.length} characters</span>
      </div>
    </div>
  );
}