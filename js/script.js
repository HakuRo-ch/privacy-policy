document.querySelectorAll(".carousel").forEach((carousel) => {

    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-track img");

    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");

    const dots = carousel.querySelectorAll(".dot");

    let index = 0;

    function updateCarousel() {

        track.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach((dot, i) => {

            dot.classList.toggle("active", i === index);

        });

    }

    next.addEventListener("click", () => {

        index++;

        if (index >= slides.length) {

            index = 0;

        }

        updateCarousel();

    });

    prev.addEventListener("click", () => {

        index--;

        if (index < 0) {

            index = slides.length - 1;

        }

        updateCarousel();

    });

    // ドットを押して移動

    dots.forEach((dot, i) => {

        dot.addEventListener("click", () => {

            index = i;

            updateCarousel();

        });

    });

    updateCarousel();

});
