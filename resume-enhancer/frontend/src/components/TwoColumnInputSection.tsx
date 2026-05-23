import ProfileUploadCard from "./ProfileUploadCard";
import JobDescriptionCard from "./JobDescriptionCard";
import styles from "../styles/components/TwoColumnInputSection.module.css";

type Props = {
  profileFile: File | null;
  setProfileFile: React.Dispatch<React.SetStateAction<File | null>>;
  jobDescription: string;
  setJobDescription: React.Dispatch<React.SetStateAction<string>>;
  onAnalyze: () => void;
};

export default function TwoColumnInputSection({
  profileFile,
  setProfileFile,
  jobDescription,
  setJobDescription,
  onAnalyze,
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <ProfileUploadCard
          profileFile={profileFile}
          setProfileFile={setProfileFile}
        />
        <JobDescriptionCard
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
        />
      </div>

      <div className={styles.actions}>
        <button className={styles.button} onClick={onAnalyze}>
          Analyze Profile
        </button>
      </div>
    </section>
  );
}