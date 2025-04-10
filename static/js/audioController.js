const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const sources = [];

const filters = [];
const gainNodes = [];

const trackCount = 8;

window.onload = () => {
    for (let i = 0; i < trackCount; i++) {
        const audioElement = document.getElementById(`audio${i}`);
        const track = audioCtx.createMediaElementSource(audioElement);
        const gainNode = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(10000, audioCtx.currentTime);

        track.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        sources.push(audioElement);
        gainNodes.push(gainNode);
        filters.push(filter);
    }
};

function togglePlay(index) {
    const audio = sources[index];
    if (audio.paused) {
        audioCtx.resume();  // para Safari y Chrome
        audio.play();
    } else {
        audio.pause();
    }
}

function setVolume(index, value) {
    gainNodes[index].gain.setValueAtTime(parseFloat(value), audioCtx.currentTime);
}

function setPlaybackRate(index, value) {
    sources[index].playbackRate = parseFloat(value);
}

function setPitch(index, value) {
    // No se puede cambiar pitch sin afectar velocidad con elementos <audio>
    setPlaybackRate(index, value);  // Alternativa básica
}

function setFilter(index, value) {
    filters[index].frequency.setValueAtTime(parseFloat(value), audioCtx.currentTime);
}

function startAudio() {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume().then(() => {
            alert("Audio activado. Ahora puedes marcar los checkboxes.");
        });
    }
} // ← esta llave estaba faltando

function stopAll() {
    for (let i = 0; i < trackCount; i++) {
        sources[i].pause();
        sources[i].currentTime = 0; // Reinicia la pista al principio
        const checkbox = document.querySelector(`#tracks .track:nth-child(${i + 1}) input[type='checkbox']`);
        if (checkbox) checkbox.checked = false;
    }
}
