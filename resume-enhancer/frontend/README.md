# Resume Enhancer Frontend

This is the frontend component of the Resume Enhancer application. It is built using React and TypeScript, providing a user-friendly interface for users to enhance their resumes.

## Project Structure

- **public/**: Contains static files like `index.html`.
- **src/**: Contains the source code for the application.
  - **components/**: Reusable components for the application.
    - `ResumeEditor.tsx`: Component for editing resumes.
    - `SuggestionsPanel.tsx`: Component for displaying enhancement suggestions.
    - `Preview.tsx`: Component for showing a preview of the resume.
  - **pages/**: Contains different pages of the application.
    - `Home.tsx`: The landing page of the application.
  - **hooks/**: Custom hooks for managing state and side effects.
    - `useEnhancer.ts`: Hook for enhancing resumes.
  - **services/**: Functions for making API calls to the backend.
    - `api.ts`: API service for fetching and submitting resumes.
  - **styles/**: Contains global styles for the application.
    - `globals.css`: Global CSS styles.

## Getting Started

To get started with the frontend application, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd resume-enhancer/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.