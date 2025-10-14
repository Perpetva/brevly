# Brevly

Um encurtador de links usando Next.js + React e backend FastAPI.

## Demonstração

### Alternando entre Light/Dark Mode
![Dark/Light Mode](./frontend/public/videos/dark-light-mode.gif)

### Encurtando um Link
![Shorten Link](./frontend/public/videos/shorten-link.gif)

## Como executar


1. **Backend** (FastAPI):
	 - Requisitos: Python 3.10+
	 - Instale as dependências:
		 ```
		 pip install -r backend/requirements.txt
		 ```
	 - Rode o servidor:
		 ```
		 uvicorn backend.main:app --reload --port 8000
		 ```

2. **Frontend** (Next.js):
	 - Requisitos: Node 18+
	 - Instale dependências:
		 ```
		 cd frontend
		 npm install
		 npm run dev
		 ```
	 - Acesse: http://localhost:3000

## Licença

Projeto educacional. Sinta-se livre para adaptar.

Feito por @Perpetva