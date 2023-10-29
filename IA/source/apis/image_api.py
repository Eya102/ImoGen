from fastapi import APIRouter
from source.schemas.schema import UserText
from source.services.Image_service import ImageService

Image_router = APIRouter()

@Image_router.post('/prediction')
def get_messsage_from_first_model(request: UserText):
    return ImageService.get_response_from_diffusion_model(request=request)
