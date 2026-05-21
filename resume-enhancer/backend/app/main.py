from fastapi import FastAPI
from app.api.v1 import api_router

app = FastAPI(
    title="Resume Enhancer Backend",
    version="0.1.0",
)

app.include_router(api_router, prefix="/api/v1")

@app.get("/", summary="Root health check")
async def root():
    return {"status": "ok", "message": "Backend is running"}
