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





const openBtn = document.getElementById("openCatalog");
const closeBtn = document.getElementById("closeCatalog");
const modal = document.getElementById("catalogModal");

openBtn.addEventListener("click", (e) => {
    e.preventDefault();      
    e.stopPropagation();    

    modal.classList.remove("hidden");
    modal.classList.add("flex");
});

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    modal.classList.add("hidden");
    modal.classList.remove("flex");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
});
