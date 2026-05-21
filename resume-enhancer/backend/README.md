# Backend (FastAPI)

This is the FastAPI backend for the Resume Enhancer project.

## Quick start

```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

Then open:

- http://127.0.0.1:8000/          -> root health check
- http://127.0.0.1:8000/api/v1/hello -> hello world endpoint

FastAPI docs:
- Swagger UI: http://127.0.0.1:8000/docs
- ReDoc:      http://127.0.0.1:8000/redoc
