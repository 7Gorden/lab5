const modal = document.getElementById('feedback-modal');
const openBtn = document.getElementById('open-modal');
const closeBtn = document.getElementById('close-modal');
const contactForm = document.getElementById('contact-form');

// Відкриття/Закриття модалки
openBtn.onclick = () => modal.style.display = 'block';
closeBtn.onclick = () => modal.style.display = 'none';

// Відправка форми
contactForm.onsubmit = async (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
    };

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (result.success) {
            alert('Лист надіслано на твій сервер!');
            contactForm.reset();
            modal.style.display = 'none';
        }
    } catch (error) {
        alert('Помилка: перевір, чи запущено сервер у VS Code!');
    }
};