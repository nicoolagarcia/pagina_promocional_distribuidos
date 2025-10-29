from fastapi import FastAPI, Request, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

app = FastAPI(title="Página Promocional API")

# --- CORS para permitir conexión con el frontend ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Montar carpeta de archivos estáticos ---
app.mount("/static", StaticFiles(directory="static"), name="static")

# --- Modelo de datos para registro ---
class RegistroUsuario(BaseModel):
    nombre: str
    email: str

# --- Endpoints ---

@app.get("/")
def inicio():
    return {"mensaje": "Bienvenido a la API de la Página Promocional"}

@app.post("/registro")
def registrar_usuario(usuario: RegistroUsuario):
    # Aquí podrías guardar los datos en una base o archivo
    print(f"Usuario registrado: {usuario.nombre} - {usuario.email}")
    return {"status": "ok", "mensaje": f"Usuario {usuario.nombre} registrado correctamente"}

@app.get("/terminos")
def terminos():
    return {
        "titulo": "Términos y Condiciones",
        "contenido": (
            "El uso de esta aplicación implica la aceptación de los términos, "
            "incluyendo las políticas de privacidad y el manejo adecuado de la información."
        )
    }

@app.get("/video")
def video():
    return {
        "titulo": "Video Promocional",
        "url": "http://localhost:5173/video"
    }

@app.get("/instalacion")
def instalacion():
    return {
        "titulo": "Guía de Instalación",
        "pasos": [
            "Clonar el repositorio del proyecto.",
            "Crear un entorno virtual con 'python -m venv venv'.",
            "Activar el entorno y ejecutar 'pip install -r requirements.txt'.",
            "Iniciar el backend con 'uvicorn main:app --reload'.",
            "Ejecutar el frontend con 'npm run dev'."
        ]
    }

@app.get("/uso")
def uso():
    return {
        "titulo": "Instrucciones de Uso",
        "pasos": [
            "Registrarse en la página de registro.",
            "Aceptar los términos y condiciones.",
            "Ver el video promocional.",
            "Seguir la guía de instalación y comenzar a usar la app."
        ]
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)