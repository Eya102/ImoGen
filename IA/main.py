
from uvicorn import run
from fastapi import FastAPI
from source.apis.image_api import  Image_router
from fastapi.middleware.cors import CORSMiddleware
from configuration.config import Appconfig

app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,  
    allow_methods=["*"],  
    allow_headers=["*"],  
)
if __name__ == "__main__":
    Config=Appconfig()
    app.include_router(Image_router)
    run(app, host=Config.APP_HOST, port=Config.APP_PORT)
