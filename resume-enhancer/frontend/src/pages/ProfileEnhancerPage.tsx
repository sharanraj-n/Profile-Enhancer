import { useState } from "react";
import HeroHeader from "../components/HeroHeader";
import TwoColumnInputSection from "../components/TwoColumnInputSection";

export default function ProfileEnhancerPage() {
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleAnalyze = () => {
    console.log({ profileFile, jobDescription });
  };

  return (
    <div>
      <HeroHeader />
      <TwoColumnInputSection
        profileFile={profileFile}
        setProfileFile={setProfileFile}
        jobDescription={jobDescription}
        setJobDescription={setJobDescription}
        onAnalyze={handleAnalyze}
      />
    </div>
  );
}