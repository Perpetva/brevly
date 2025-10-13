from fastapi import FastAPI #type: ignore
from middlewares import setup_cors
from routes.links import router as links_router

app = FastAPI()

# middlewares
setup_cors(app)

# routes
app.include_router(links_router)
