function startTimer() {
    const now = new Date();

    // Bugungi sana uchun 11:00 maqsad qilib olinadi
    let target = new Date();
    target.setHours(11, 0, 0, 0);

    // Agar hozir 11:00 dan o‘tib ketgan bo‘lsa — ertangi 11:00 ga qo‘yiladi
    if (now > target) {
        target.setDate(target.getDate() + 1);
    }

    function update() {
        let diff = target - new Date();

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        let seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("d").textContent = days;
        document.getElementById("h").textContent = hours;
        document.getElementById("m").textContent = minutes;
        document.getElementById("s").textContent = seconds;
    }

    update();
    setInterval(update, 1000);
}

startTimer();

