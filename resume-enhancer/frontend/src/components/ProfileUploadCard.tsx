import { useRef } from "react";
import styles from "../styles/components/ProfileUploadCard.module.css";

type Props = {
  profileFile: File | null;
  setProfileFile: React.Dispatch<React.SetStateAction<File | null>>;
};

export default function ProfileUploadCard({
  profileFile,
  setProfileFile,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleCardClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setProfileFile(file);
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <h2 className={styles.title}>Upload Profile</h2>
      <p className={styles.helper}>
        Upload your resume or profile document in PDF or DOCX format. Click
        anywhere in this card to select a file.
      </p>

      <div className={styles.dropzone}>
        <span className={styles.dropText}>Click to choose a file</span>
        <span className={styles.formatText}>Supported: PDF, DOCX</span>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.docx"
        onChange={handleChange}
        className={styles.hiddenInput}
      />

      {profileFile && (
        <div className={styles.fileName}>
          Selected file: <strong>{profileFile.name}</strong>
        </div>
      )}
    </div>
  );
}