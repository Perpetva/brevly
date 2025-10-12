from fastapi import FastAPI, HTTPException
from fastapi.responses import RedirectResponse
from pydantic import BaseModel

import random, string

app = FastAPI()
links = {}

class UrlRequest (BaseModel):
    url: str

def generate_code():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=6))

@app.post("/shorten")
def shorten_link(req: UrlRequest):
    code = generate_code()
    links[code] = req.url
    
    return {"shortened_url": f"http://localhost:8000/{code}"}

@app.get("/{code}")
def redirect_link(code: str):
    if code not in links:
        raise HTTPException(status_code=404, detail="Link not found")
    
    return RedirectResponse(url=links[code])

