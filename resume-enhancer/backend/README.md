# Resume Enhancer Backend

This is the backend component of the Resume Enhancer application. It is built using TypeScript and Node.js, providing RESTful APIs for managing and enhancing resumes.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd resume-enhancer/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the backend server, run the following command:
```
npm start
```

The server will be running on `http://localhost:3000`.

### API Endpoints

- `GET /resume`: Retrieve the resume.
- `POST /resume`: Update the resume.
- `DELETE /resume`: Delete the resume.

### Folder Structure

- `src`: Contains the source code for the backend.
  - `controllers`: Contains the logic for handling requests.
  - `routes`: Defines the API routes.
  - `services`: Contains business logic for enhancing resumes.
  - `models`: Defines the data structures.
  - `utils`: Utility functions for parsing data.
  - `types`: TypeScript definitions and interfaces.

### License

This project is licensed under the MIT License. See the LICENSE file for details.