import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ResumeEditor from './components/ResumeEditor';
import SuggestionsPanel from './components/SuggestionsPanel';
import Preview from './components/Preview';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/editor" component={ResumeEditor} />
        <Route path="/suggestions" component={SuggestionsPanel} />
        <Route path="/preview" component={Preview} />
      </Switch>
    </Router>
  );
};

export default App;