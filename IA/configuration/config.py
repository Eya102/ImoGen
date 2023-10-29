from pydantic import BaseSettings, Field

class Appconfig(BaseSettings):
    APP_HOST: str = Field(env="APP_HOST", default="localhost")
    APP_PORT: int = Field(env="APP_PORT", default=5000)
    PROJECT_NAME: str = Field(env="PROJECT_NAME", default="TickieGen")
    OPENAPI_URL: str = Field(env="OPENAPI_URL", default="/docs/swagger.json")
    DESCRIPTION: str = Field(env="DESCRIPTION", default="Swagger for TickieGen")
    DOCS_URL: str = Field(env="DOCS_URL", default="/docs")
    REDOC_URL: str = Field(env="REDOC_URL", default="/redocs")