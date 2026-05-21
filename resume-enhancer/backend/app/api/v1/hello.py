from fastapi import APIRouter

router = APIRouter()

@router.get("/", summary="Hello world endpoint")
async def hello_world():
    return {"message": "Hello World from FastAPI backend"}
