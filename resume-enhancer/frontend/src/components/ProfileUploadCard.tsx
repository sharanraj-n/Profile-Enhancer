import styles from "../styles/components/ProfileUploadCard.module.css";

type Props = {
  profileFile: File | null;
  setProfileFile: React.Dispatch<React.SetStateAction<File | null>>;
};

export default function ProfileUploadCard({
  profileFile,
  setProfileFile,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setProfileFile(file);
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Upload Profile</h2>
      <p className={styles.helper}>
        Upload your resume or profile document in PDF or DOCX format.
      </p>

      <label className={styles.dropzone}>
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={handleChange}
          className={styles.input}
        />
        <span className={styles.dropText}>
          Click to choose a file or drag and drop later
        </span>
        <span className={styles.formatText}>Supported: PDF, DOCX</span>
      </label>

      {profileFile && (
        <div className={styles.fileName}>
          Selected file: <strong>{profileFile.name}</strong>
        </div>
      )}
    </div>
  );
}