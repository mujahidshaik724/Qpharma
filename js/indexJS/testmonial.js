class Carousel {
    constructor(carouselId, dataUrl) {
        this.carousel = document.getElementById(carouselId);
        this.dataUrl = dataUrl;
        this.cardData = [];
        this.currentIndex = 0;
        this.cardsPerView = 3; // Default number of visible cards for laptops
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            this.cardData = await response.json();
            this.renderCarousel();
            this.calculateVisibleCards(); // Calculate cards per view
            this.updateButtonStates(); // Initial button state update
        } catch (error) {
            console.error("Error fetching carousel data:", error);
        }
    }

    calculateVisibleCards() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 768) {
            this.cardsPerView = 1; // Mobile: 1 card
        } else if (screenWidth <= 1024) {
            this.cardsPerView = 2; // Tablet: 2 cards
        } else {
            this.cardsPerView = 3; // Laptop/Desktop: 3 cards
        }
    }

    renderCarousel() {
        this.carousel.innerHTML = this.cardData.map(card => `
            <div class="carousel-item">
                <div class="card">
                    <img src="${card.image}" alt="${card.title}" />
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                </div>
            </div>
        `).join('');
    }

    moveCarousel(direction) {
        const cardWidth = this.carousel.firstElementChild.offsetWidth;

        const totalCards = this.cardData.length;

        // Update index based on direction
        this.currentIndex = Math.max(0, Math.min(this.currentIndex + direction, totalCards - this.cardsPerView));

        // Apply transform based on the current index
        const offset = this.currentIndex * cardWidth;
        this.carousel.style.transform = `translateX(${-offset}px)`;

        // Update button states after movement
        this.updateButtonStates();
    }

    updateButtonStates() {
        const totalCards = this.cardData.length;

        // Select buttons
        const prevButton = document.querySelector(".btn-prev");
        const nextButton = document.querySelector(".btn-next");

        // Disable/enable buttons based on the current index
        prevButton.disabled = this.currentIndex === 0;
        nextButton.disabled = this.currentIndex >= totalCards - this.cardsPerView;
    }
}

// Initialize the carousel
const carousel = new Carousel("carousel", "/data.json");
carousel.fetchData();

// Update visible cards on window resize and button states
window.addEventListener("resize", () => {
    carousel.calculateVisibleCards();
    carousel.updateButtonStates();
});

// Attach event listeners for navigation
document.querySelector(".btn-prev").addEventListener("click", () => carousel.moveCarousel(-1));
document.querySelector(".btn-next").addEventListener("click", () => carousel.moveCarousel(1));
