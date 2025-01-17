// Create stars inside the About section
function createStars() {
    const numStars = 100; // Number of stars to generate
    const aboutSection = document.querySelector('#about'); // Select the About section

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3 + 1; // Random size between 1 and 4px
        const xPos = Math.random() * aboutSection.offsetWidth; // Random x position within the About section
        const yPos = Math.random() * aboutSection.offsetHeight; // Random y position within the About section

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${xPos}px`;
        star.style.top = `${yPos}px`;

        aboutSection.appendChild(star); // Append star to the About section
    }
}

// Initialize stars when the page loads
createStars();


















document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.service-item');
    const exploreButton = document.querySelector('.explore-more-btn');

    // Function to generate a random dark color
    function getRandomDarkColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            // Generate a color component between 0x0 and 0x7 to ensure it's dark
            color += letters[Math.floor(Math.random() * 8)]; // restrict to darker range
        }
        return color;
    }

    // Add hover event for service items
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const randomColor = getRandomDarkColor();
            item.style.setProperty('--random-background-color', randomColor);
            
            // Random dark color for button inside the item
            const buttonRandomColor = getRandomDarkColor();
            item.querySelector('.service-info a').style.setProperty('--random-button-color', buttonRandomColor);
        });
    });

    // Add hover event for "Explore More" button
    if (exploreButton) {
        exploreButton.addEventListener('mouseenter', () => {
            const randomExploreColor = getRandomDarkColor();
            exploreButton.style.setProperty('--random-explore-button-color', randomExploreColor);
        });
    }
});
