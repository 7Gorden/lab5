// 1. Збереження даних про систему в LocalStorage
const sysInfo = {
    os: navigator.platform,
    browser: navigator.userAgent
};
localStorage.setItem("userSystemInfo", JSON.stringify(sysInfo));

// Виведення даних у футер
const footerInfo = document.getElementById("footer-info");
const storedData = JSON.parse(localStorage.getItem("userSystemInfo"));
if (storedData && footerInfo) {
    footerInfo.innerText += ` | Система: ${storedData.os} | Браузер: ${storedData.browser}`;
}

// 2. Отримання коментарів (JSONPlaceholder)
const myVariant = 1; 
fetch(`https://jsonplaceholder.typicode.com/posts/${myVariant}/comments`)
    .then(response => response.json())
    .then(comments => {
        const container = document.getElementById("comments-container");
        comments.forEach(c => {
            const card = document.createElement("div");
            card.style.borderBottom = "1px solid #ddd";
            card.style.padding = "10px 0";
            card.innerHTML = `<strong>${c.name}</strong><br><small>${c.email}</small><p>${c.body}</p>`;
            container.appendChild(card);
        });
    });

// 3. Модальне вікно через 1 хвилину (60000 мс)
setTimeout(() => {
    const modal = document.getElementById("feedback-modal");
    if(modal) modal.classList.add("show");
}, 60000);

document.getElementById("close-modal").onclick = () => {
    document.getElementById("feedback-modal").classList.remove("show");
};

// 4. Зміна теми
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Авто-тема після 21:00
const hour = new Date().getHours();
if (hour < 7 || hour >= 21) {
    document.body.classList.add("dark");
}