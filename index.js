// Toggle mobile menu visibility
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
}

// Slider image array
const slidersImgArray = [
    "./public/images/slider1.jpg",
    "./public/images/slider2.jpg",
    "./public/images/slider3.jpg",
    "./public/images/slider4.jpg",
    "./public/images/slider5.jpg"
];

// Get the slider image element
const slideImage = document.getElementById("img1");

// Initial Variables
let startX = 0;
let endX = 0;
let isDragging = false;
const threshold = 100;  // Minimum swipe distance to trigger the slide

// Function to move to the next image
function next() {
    let index = parseInt(slideImage.getAttribute("data-target"));
    const totalImages = slidersImgArray.length;
    index = (index + 1) % totalImages;
    slideImage.setAttribute("src", slidersImgArray[index]);
    slideImage.setAttribute("data-target", index);
}

// Function to move to the previous image
function prev() {
    let index = parseInt(slideImage.getAttribute("data-target"));
    const totalImages = slidersImgArray.length;
    index = (index - 1 + totalImages) % totalImages;
    slideImage.setAttribute("src", slidersImgArray[index]);
    slideImage.setAttribute("data-target", index);
}

// Handle touch swipe (for mobile)
slideImage.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;  // Get the initial touch position
});

slideImage.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;  // Track movement
});

slideImage.addEventListener("touchend", () => {
    handleSwipe();  // Check if swipe distance exceeds the threshold
});

// Handle mouse swipe (for desktop)
slideImage.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    isDragging = true;
});

slideImage.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    endX = e.clientX;
});

slideImage.addEventListener("mouseup", () => {
    if (isDragging) {
        handleSwipe();  // Handle the swipe on mouse up
        isDragging = false;
    }
});

slideImage.addEventListener("mouseleave", () => {
    isDragging = false;  // Stop dragging if the mouse leaves the image
});

// Function to handle swipe logic
function handleSwipe() {
    const swipeDistance = startX - endX;
    
    if (Math.abs(swipeDistance) > threshold) {
        if (swipeDistance > 0) {
            // Swiped left, go to the next image
            next();
        } else {
            // Swiped right, go to the previous image
            prev();
        }
    }
}
