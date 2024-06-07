document.addEventListener("DOMContentLoaded", function() {
    const slides = [
        {
            image: "./assets/images/slideshow/slide1.jpg",
            tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            image: "./assets/images/slideshow/slide2.jpg",
            tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            image: "./assets/images/slideshow/slide3.jpg",
            tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            image: "./assets/images/slideshow/slide4.png",
            tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    const bannerImg = document.querySelector(".banner-img");
    const bannerTagline = document.querySelector("#banner p");
    const dotsContainer = document.querySelector(".dots");

    // Ajouter les bullet points
    slides.forEach((slide, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) {
            dot.classList.add("dot_selected");
        }
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    let currentSlide = 0;

    // Fonction pour mettre à jour les slides
    function updateSlide(newIndex) {
        // Mettre à jour les bullet points
        dots[currentSlide].classList.remove("dot_selected");
        dots[newIndex].classList.add("dot_selected");

        // Mettre à jour l'image
        bannerImg.src = slides[newIndex].image;

        // Mettre à jour le texte
        bannerTagline.innerHTML = slides[newIndex].tagLine;

        // Mettre à jour l'index de la slide courante
        currentSlide = newIndex;
    }

    // Ajouter des event listeners pour les flèches
    const arrowLeft = document.querySelector(".arrow_left");
    const arrowRight = document.querySelector(".arrow_right");

    arrowLeft.addEventListener("click", function() {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        updateSlide(newIndex);
    });

    arrowRight.addEventListener("click", function() {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        updateSlide(newIndex);
    });

    // Fonction pour passer à la diapositive suivante automatiquement
    function autoSlide() {
        let newIndex = (currentSlide + 1) % slides.length;
        updateSlide(newIndex);
    }

    // Initialisation de la première diapositive
    bannerImg.src = slides[currentSlide].image;
    bannerTagline.innerHTML = slides[currentSlide].tagLine;

    // Défilement automatique toutes les 5 secondes
    setInterval(autoSlide, 5000);
});
