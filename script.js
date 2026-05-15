// 1. LocalStorage: збереження даних про систему
const sysInfo = {
    os: navigator.platform,
    browser: navigator.userAgent
};
localStorage.setItem("userSystemInfo", JSON.stringify(sysInfo));

// Виведення інформації у футер
const footerInfo = document.getElementById("footer-info");
const storedData = JSON.parse(localStorage.getItem("userSystemInfo"));
if (storedData && footerInfo) {
    footerInfo.innerText += ` | Ваша система: ${storedData.os} | Браузер: ${storedData.browser}`;
}

// 2. Отримання коментарів (використовуй свій варіант замість 1)
const myVariant = 1; 
fetch(`https://jsonplaceholder.typicode.com/posts/${myVariant}/comments`)
    .then(response => response.json())
    .then(comments => {
        const container = document.getElementById("comments-container");
        comments.forEach(c => {
            const card = document.createElement("div");
            card.className = "comment-card";
            card.innerHTML = `<strong>${c.name}</strong><br><small>${c.email}</small><p>${c.body}</p>`;
            container.appendChild(card);
        });
    });

// 3. Модальне вікно через 1 хвилину
setTimeout(() => {
    const modal = document.getElementById("feedback-modal");
    if(modal) modal.style.display = "block";
}, 60000);

document.getElementById("close-modal").onclick = () => {
    document.getElementById("feedback-modal").style.display = "none";
};

// 4. Логіка зміни теми
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

// Авто-тема (після 21:00 або до 07:00)
const hour = new Date().getHours();
if (hour < 7 || hour >= 21) {
    document.body.classList.add("dark");
}