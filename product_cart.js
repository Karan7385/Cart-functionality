let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Update cart count in the navbar
const updateCartCount = () => {
    const cartCount = cartItems.length;
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-count-mobile').innerText = cartCount;
};

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.dataset.name;
        const productPrice = productCard.dataset.price;
        const productId = productCard.dataset.id;

        // Add product to cart
        const existingProduct = cartItems.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1; // Increment quantity if item already in cart
        } else {
            cartItems.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartCount();
    });
});

// Initialize cart count on page load
updateCartCount();