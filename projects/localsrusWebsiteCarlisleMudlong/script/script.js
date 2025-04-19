

// hamburger menu function for navbar
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});


// add to cart function
function addToCart(element) {
    const productNameElement = element.querySelector('.product-name');
    if (element.classList.contains('processing')) {
        return;
    }
    const originalText = productNameElement.textContent;
    productNameElement.textContent = 'Product Added to Cart!';
    element.classList.add('processing');
    setTimeout(() => {
        productNameElement.textContent = originalText;
        element.classList.remove('processing');
    }, 1000);
}


