import React, { useState } from 'react';

const ResumeEditor: React.FC = () => {
    const [resumeData, setResumeData] = useState({
        name: '',
        experience: '',
        skills: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setResumeData({
            ...resumeData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to submit resume data to the backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={resumeData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Experience:</label>
                <textarea
                    name="experience"
                    value={resumeData.experience}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Skills:</label>
                <textarea
                    name="skills"
                    value={resumeData.skills}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Save Resume</button>
        </form>
    );
};

export default ResumeEditor;