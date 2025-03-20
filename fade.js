document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll("body *"); // Select all elements

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = "translateY(30px)";
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => observer.observe(element));
});
