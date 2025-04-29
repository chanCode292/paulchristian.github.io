document.addEventListener("DOMContentLoaded", function () {
    const ratings = document.querySelectorAll(".rating");
 
    ratings.forEach(rating => {
        const stars = rating.querySelectorAll("i");
 
        stars.forEach(star => {
            star.addEventListener("click", function () {
                let value = parseInt(star.getAttribute("data-value"));
                rating.setAttribute("data-rating", value);
                updateStars(rating, value);
            });
 
            star.addEventListener("mouseover", function () {
                let value = parseInt(star.getAttribute("data-value"));
                highlightStars(rating, value);
            });
 
            star.addEventListener("mouseout", function () {
                let value = parseInt(rating.getAttribute("data-rating"));
                updateStars(rating, value);
            });
        });
    });
 
    function updateStars(rating, value) {
        rating.querySelectorAll("i").forEach(star => {
            star.classList.remove("active");
            if (parseInt(star.getAttribute("data-value")) <= value) {
                star.classList.add("active");
            }
        });
    }
 
    function highlightStars(rating, value) {
        rating.querySelectorAll("i").forEach(star => {
            star.classList.remove("active");
            if (parseInt(star.getAttribute("data-value")) <= value) {
                star.classList.add("active");
            }
        });
    }
});