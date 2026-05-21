import React from 'react';

const SuggestionsPanel: React.FC<{ suggestions: string[] }> = ({ suggestions }) => {
    return (
        <div className="suggestions-panel">
            <h2>Suggestions for Enhancements</h2>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default SuggestionsPanel;