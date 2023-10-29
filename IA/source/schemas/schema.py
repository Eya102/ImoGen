from pydantic import BaseModel


class UserText(BaseModel):
    prompt: str
    nom : str

class PredictionOutput(BaseModel):
    response:str