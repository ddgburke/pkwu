const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    observer.observe(element);
});


/* IMAGE LOAD EFFECT */

const images = document.querySelectorAll("img");

images.forEach((image) => {

    image.addEventListener("load", () => {
        image.classList.add("loaded");
    });

});


/* PARALLAX HALUS PADA HERO */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scroll = window.scrollY;

    if (scroll < window.innerHeight) {
        heroImage.style.transform =
            `translateY(${scroll * 0.08}px)`;
    }

});
