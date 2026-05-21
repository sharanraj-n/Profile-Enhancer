export function parseResumeText(resumeText: string): ResumeData {
    const lines = resumeText.split('\n');
    const resumeData: ResumeData = {
        name: '',
        experience: [],
        skills: []
    };

    lines.forEach(line => {
        if (line.startsWith('Name:')) {
            resumeData.name = line.replace('Name:', '').trim();
        } else if (line.startsWith('Experience:')) {
            const experience = line.replace('Experience:', '').trim();
            resumeData.experience.push(experience);
        } else if (line.startsWith('Skills:')) {
            const skills = line.replace('Skills:', '').trim().split(',').map(skill => skill.trim());
            resumeData.skills.push(...skills);
        }
    });

    return resumeData;
}

export function extractSkills(resumeData: ResumeData): string[] {
    return resumeData.skills;
}