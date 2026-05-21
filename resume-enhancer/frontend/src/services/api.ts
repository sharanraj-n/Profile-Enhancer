import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

export const fetchResume = async (resumeId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resumes/${resumeId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching resume: ' + error.message);
    }
};

export const submitResume = async (resumeData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/resumes`, resumeData);
        return response.data;
    } catch (error) {
        throw new Error('Error submitting resume: ' + error.message);
    }
};