import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ResumeEditor from './components/ResumeEditor';
import SuggestionsPanel from './components/SuggestionsPanel';
import Preview from './components/Preview';
import './styles/globals.css';
import ProfileEnhancerPage from "./pages/ProfileEnhancerPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileEnhancerPage />} />
      </Routes>
    </Router>
  );
};

export default App;