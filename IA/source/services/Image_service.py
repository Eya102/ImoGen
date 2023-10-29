from diffusers import StableDiffusionPipeline
from source.schemas.schema import UserText , PredictionOutput
import torch

device = "cuda" if torch.cuda.is_available() else "cpu"
loaded_data = torch.load('model/diffusion_v5.pth', map_location=device)





class ImageService:
     def __init__(self, loaded_data):
        self.loaded_data = loaded_data
        
     def get_response_from_diffusion_model(request: UserText) :
         image = loaded_data(request.prompt).images[0]
         image.save(f"../Front/src/images/{request.nom}.png")
         return {"image": request.nom+".png"}
