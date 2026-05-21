from fastapi import APIRouter
from . import hello

api_router = APIRouter()
api_router.include_router(hello.router, prefix="/hello", tags=["hello"])
