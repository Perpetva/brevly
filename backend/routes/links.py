from fastapi import APIRouter, HTTPException #type: ignore
from fastapi.responses import RedirectResponse #type: ignore
from pydantic import BaseModel #type: ignore
import random, string

router = APIRouter()

links = {}

class UrlRequest(BaseModel):
    url: str

def generate_code():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=6))

def normalize_url(url: str) -> str:
    url = url.strip()
    if not (url.startswith("http://") or url.startswith("https://")):
        return f"http://{url}"
    
    return url

@router.post("/shorten")
def shorten_link(req: UrlRequest):
    code = generate_code()
    links[code] = normalize_url(req.url)
    
    return {"shortened_url": f"http://localhost:8000/{code}"}

@router.get("/{code}")
def redirect_link(code: str):
    if code not in links:
        raise HTTPException(status_code=404, detail="Link not found")
    
    return RedirectResponse(url=links[code])