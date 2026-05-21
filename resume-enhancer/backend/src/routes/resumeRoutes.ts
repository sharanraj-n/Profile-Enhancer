import { Router } from 'express';
import ResumeController from '../controllers/resumeController';

const router = Router();
const resumeController = new ResumeController();

export const setResumeRoutes = () => {
    router.get('/resume', resumeController.getResume.bind(resumeController));
    router.put('/resume', resumeController.updateResume.bind(resumeController));
    router.delete('/resume', resumeController.deleteResume.bind(resumeController));
    
    return router;
};