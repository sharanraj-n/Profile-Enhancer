export interface ResumeData {
    name: string;
    experience: Array<{
        jobTitle: string;
        company: string;
        startDate: string;
        endDate: string;
        description: string;
    }>;
    skills: string[];
    education: Array<{
        degree: string;
        institution: string;
        graduationYear: number;
    }>;
}

export interface EnhancementResult {
    enhancedResume: ResumeData;
    score: number;
    suggestions: string[];
}