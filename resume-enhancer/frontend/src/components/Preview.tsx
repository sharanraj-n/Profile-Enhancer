import React from 'react';

const Preview: React.FC<{ resumeData: any }> = ({ resumeData }) => {
    return (
        <div className="preview">
            <h2>Resume Preview</h2>
            <h3>{resumeData.name}</h3>
            <h4>Experience</h4>
            <ul>
                {resumeData.experience.map((job: any, index: number) => (
                    <li key={index}>
                        <strong>{job.title}</strong> at {job.company} ({job.startDate} - {job.endDate})
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
            <h4>Skills</h4>
            <ul>
                {resumeData.skills.map((skill: string, index: number) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Preview;