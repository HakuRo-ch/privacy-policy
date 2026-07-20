document.querySelectorAll(".carousel").forEach((carousel) => {

    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-track img");

    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    const dots = carousel.querySelectorAll(".dot");

    let current = 0;

    function update() {

        const slideWidth = carousel.querySelector(".carousel-window").clientWidth;

        track.style.transform = `translateX(-${current * slideWidth}px)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === current);
        });

    }

    // -----------------------------
    // 次へ
    // -----------------------------

    nextBtn.addEventListener("click", () => {

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        update();

    });

    // -----------------------------
    // 前へ
    // -----------------------------

    prevBtn.addEventListener("click", () => {

        current--;

        if (current < 0) {
            current = slides.length - 1;
        }

        update();

    });

    // -----------------------------
    // ドット
    // -----------------------------

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            current = index;

            update();

        });

    });

    // -----------------------------
    // スワイプ
    // -----------------------------

    let startX = 0;

    track.addEventListener("touchstart", (e) => {

        startX = e.touches[0].clientX;

    });

    track.addEventListener("touchend", (e) => {

        const endX = e.changedTouches[0].clientX;

        const diff = endX - startX;

        if (Math.abs(diff) < 50) return;

        if (diff < 0) {

            current++;

            if (current >= slides.length) {
                current = 0;
            }

        } else {

            current--;

            if (current < 0) {
                current = slides.length - 1;
            }

        }

        update();

    });

    // -----------------------------
    // リサイズ対応
    // -----------------------------

    window.addEventListener("resize", update);

    update();

});
