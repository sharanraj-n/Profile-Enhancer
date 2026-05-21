export class Resume {
    name: string;
    experience: Array<{ jobTitle: string; company: string; startDate: string; endDate: string }>;
    skills: string[];
    education: Array<{ degree: string; institution: string; graduationYear: number }>;
    summary: string;

    constructor(name: string, experience: Array<{ jobTitle: string; company: string; startDate: string; endDate: string }>, skills: string[], education: Array<{ degree: string; institution: string; graduationYear: number }>, summary: string) {
        this.name = name;
        this.experience = experience;
        this.skills = skills;
        this.education = education;
        this.summary = summary;
    }
}