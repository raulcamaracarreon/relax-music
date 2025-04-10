from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def index():
    filenames = [
        "CUENCOS_CUARZO1.mp3",
        "CUENCOS1.mp3",
        "GRILLOS1.mp3",
        "LLUVIA1.mp3",
        "RANAS1.mp3",
        "RIO_BOSQUE1.mp3",
        "RUISEÑOR1.mp3",
        "VIENTO1.mp3"
    ]
    return render_template("index.html", filenames=filenames)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Render asigna el puerto automáticamente
    app.run(host="0.0.0.0", port=port)
