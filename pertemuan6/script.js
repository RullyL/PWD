document.getElementById('demo').innerHTML = "Hello World";

function change() {
    const el = document.getElementById('ganti');
    el.innerHTML = el.innerHTML === "Hallo" ? "Teks baru" : "Hallo";
}

const kirim = () => {
    const nama = document.getElementById('nama').value.trim();
    const umur = document.getElementById('umur').value.trim();

    if (!nama || !umur) {
        alert("Nama dan umur wajib diisi!");
        return;
    }

    const usia = parseInt(umur, 10);
    const status = usia >= 17 ? "Dewasa" : "Anak-anak / Remaja";

    document.getElementById('hasil').innerHTML = `Halo <b>${nama}</b>, Umur: ${usia} tahun (${status})`;
};

const resetForm = () => {
    document.getElementById('nama').value = "";
    document.getElementById('umur').value = "";
    document.getElementById('hasil').innerHTML = "";
};

function toggleTema() {
    const body = document.body;
    const isDark = body.style.backgroundColor === "rgb(34, 34, 34)";
    body.style.backgroundColor = isDark ? "#ffffff" : "#222222";
    body.style.color = isDark ? "#000000" : "#ffffff";
}

let counter = 0;
function ubahCounter(delta) {
    counter += delta;
    document.getElementById('nilai-counter').innerText = counter;
}
