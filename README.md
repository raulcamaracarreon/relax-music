# 🎵 Generador de Música Incidental para Meditación

Aplicación web desarrollada con Python y Flask que permite reproducir hasta 8 pistas de audio en loop, ideales para la meditación, relajación o concentración. Cada pista puede controlarse individualmente en cuanto a volumen y filtro de frecuencia.

## 🌿 Características

- Reproducción en loop de 8 pistas (mp3)
- Controles por pista:
  - Activar/desactivar
  - Volumen
  - Filtro low-pass (cutoff)
- Botón de inicio para desbloquear el audio (requerido por navegadores)
- Botón para detener todas las pistas

## 📁 Estructura del proyecto


RELAX/
├── app.py                        # Script principal de Flask
├── requirements.txt              # Lista de dependencias (Flask)
├── README.md                     # Documentación del proyecto (opcional pero recomendado)
│
├── static/                       # Archivos estáticos accesibles por el navegador
│   ├── audio/                    # Aquí van los archivos de audio .mp3
│   │   ├── CUENCOS1.mp3
│   │   ├── CUENCOS_CUARZO1.mp3
│   │   ├── GRILLOS1.mp3
│   │   ├── LLUVIA1.mp3
│   │   ├── RANAS1.mp3
│   │   ├── RIO_BOSQUE1.mp3
│   │   ├── RUISEÑOR1.mp3
│   │   └── VIENTO1.mp3
│   │
│   └── js/
│       └── audioController.js    # Código JavaScript con los controles de cada pista
│
├── templates/
│   └── index.html                # Interfaz HTML principal renderizada por Flask


## 🚀 Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/RELAX.git
   cd RELAX



2. (Opcional) Crea un entorno virtual:

python -m venv venv
source venv/bin/activate      # Linux/macOS
venv\Scripts\activate         # Windows

3. Instala las dependencias:

pip install -r requirements.txt

4. Ejecuta la aplicación:

python app.py

5. Abre tu navegador en:

http://127.0.0.1:5000/


