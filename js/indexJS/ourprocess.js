document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Add animation class when visible
            } else {
                entry.target.classList.remove("show"); // Remove class when out of view
            }
        });
    }, { threshold: 0.5 });

    steps.forEach(step => observer.observe(step));
});
