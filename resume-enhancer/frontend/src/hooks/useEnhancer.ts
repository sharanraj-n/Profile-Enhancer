import { useState, useEffect } from 'react';
import { fetchResume, submitResume } from '../services/api';

const useEnhancer = () => {
    const [resumeData, setResumeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadResume = async () => {
            try {
                const data = await fetchResume();
                setResumeData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadResume();
    }, []);

    const enhanceResume = async (newData) => {
        setLoading(true);
        try {
            const enhancedData = await submitResume(newData);
            setResumeData(enhancedData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { resumeData, loading, error, enhanceResume };
};

export default useEnhancer;