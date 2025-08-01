// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Показываем модальное окно
    const modal = document.getElementById("warning-modal");
    const acceptBtn = document.getElementById("accept-btn");

    acceptBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        // Запускаем анимации карточек
        setTimeout(animateCards, 500);
    });

    // Данные читов
    const cheats = [
        { title: "Чит Tundra на War Thunder - ESP, Distance, Zoom", img: "images/tundra1.webp" },
        { title: "Чит Test Drive Unlocker для War Thunder", img: "images/test-drive.webp" },
        { title: "Чит Thunder Tirnal v1.2.1 на War Thunder", img: "images/thunder-tirnal.webp" },
        { title: "Чит Realistic Battles для War Thunder - ESP, Aimbot", img: "images/realistic-battles.webp" },
        { title: "Чит Xnzero для War Thunder - ESP, EAC", img: "images/xnzero.webp" },
        { title: "Чит Thunder Hook для War Thunder - ESP, Wallhack", img: "images/thunder-hook.webp" },
        { title: "Чит MASON для War Thunder - Aim, ESP, Misc", img: "images/mason.webp" },
        { title: "Чит WarHook v1.7.5 для War Thunder - Arcade hack", img: "images/warhook.webp" }
    ];

    const grid = document.getElementById("cheats-grid");

    // Генерация карточек
    function renderCheats(list) {
        grid.innerHTML = "";
        list.forEach((cheat, index) => {
            const card = document.createElement("div");
            card.className = "cheat-card";
            card.style.transitionDelay = `${index * 0.1}s`;
            card.innerHTML = `
                <img src="${cheat.img}" alt="${cheat.title}" onContextMenu="return false;">
                <h3>${cheat.title}</h3>
                <a href="#" class="btn" onclick="alert('Доступ после регистрации'); return false;">Подробнее</a>
            `;
            grid.appendChild(card);
        });
    }

    // Анимация появления карточек
    function animateCards() {
        const cards = document.querySelectorAll(".cheat-card");
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.classList.add("visible");
            }, i * 100);
        });
    }

    // Поиск
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        const filtered = cheats.filter(cheat => 
            cheat.title.toLowerCase().includes(value)
        );
        renderCheats(filtered);
        animateCards();
    });

    // Инициализация
    renderCheats(cheats);

    // Блокировка контекстного меню (ПКМ)
    document.addEventListener("contextmenu", e => {
        if (e.target.tagName === "IMG" || e.target.closest(".cheat-card")) {
            e.preventDefault();
            alert("Сохранение изображений запрещено.");
        }
    });

    // Блокировка Ctrl+C, Ctrl+Shift+I и т.д.
    document.addEventListener("keydown", e => {
        if (e.ctrlKey && (e.key === "c" || e.key === "i" || e.key === "u")) {
            e.preventDefault();
            alert("Копирование запрещено.");
        }
    });
});