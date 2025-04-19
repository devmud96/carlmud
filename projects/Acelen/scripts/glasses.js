const products = [
    { id: 1, name: 'Stilix', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/kids_glasses/kids-glasses-1.png', description: 'Colorful glasses for kids.', price: '$50' },
    { id: 2, name: 'Maxx', category: 'womens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/womens_glasses/glasses-woman-1.png', description: 'Stylish sunglasses for women.', price: '$80' },
    { id: 3, name: 'Cobbler', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/mens_glasses/glasses-men-1.png', description: 'Elegant eyeglasses for men.', price: '$70' },
    { id: 4, name: 'Gialo', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/mens_glasses/glasses-men-2.png', description: 'Elegant eyeglasses for men.', price: '$70' },
    { id: 5, name: 'Bingbong', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/mens_glasses/glasses-men-3.png', description: 'Elegant eyeglasses for men.', price: '$70' },
    { id: 6, name: 'Meller', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/mens_glasses/glasses-men-1.png', description: 'Elegant eyeglasses for men.', price: '$70' },
    { id: 7, name: 'Brax', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/mens_glasses/glasses-men-2.png', description: 'Elegant eyeglasses for men.', price: '$70' },
    { id: 8, name: 'Mink', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/mens_glasses/glasses-men-3.png', description: 'Elegant eyeglasses for men.', price: '$70' },
    { id: 9, name: 'Mara', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/mens_glasses/glasses-men-1.png', description: 'Elegant eyeglasses for men.', price: '$70' },
    { id: 10, name: 'Cobalt', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/mens_glasses/glasses-men-2.png', description: 'Elegant eyeglasses for men.', price: '$70' },
    { id: 11, name: 'Abar', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/mens_glasses/glasses-men-3.png', description: 'Elegant eyeglasses for men.', price: '$70' },
    { id: 12, name: 'Mikula', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/kids_glasses/kids-glasses-2.png', description: 'Colorful glasses for kids.', price: '$50' },
    { id: 13, name: 'Aram', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/kids_glasses/kids-glasses-3.png', description: 'Colorful glasses for kids.', price: '$50' },
    { id: 14, name: 'Klas', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/kids_glasses/kids-glasses-1.png', description: 'Colorful glasses for kids.', price: '$50' },
    { id: 15, name: 'Brik', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/kids_glasses/kids-glasses-2.png', description: 'Colorful glasses for kids.', price: '$50' },
    { id: 16, name: 'Lancast', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/kids_glasses/kids-glasses-3.png', description: 'Colorful glasses for kids.', price: '$50' },
    { id: 17, name: 'Hanz', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/kids_glasses/kids-glasses-1.png', description: 'Colorful glasses for kids.', price: '$50' },
    { id: 18, name: 'Regato', category: 'womens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/womens_glasses/glasses-woman-2.png', description: 'Stylish sunglasses for women.', price: '$80' },
    { id: 19, name: 'Jan', category: 'womens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/womens_glasses/glasses-woman-3.png', description: 'Stylish sunglasses for women.', price: '$80' },
    { id: 20, name: 'Val', category: 'womens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/womens_glasses/glasses-woman-1.png', description: 'Stylish sunglasses for women.', price: '$80' },
    { id: 21, name: 'Canis', category: 'womens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/womens_glasses/glasses-woman-2.png', description: 'Stylish sunglasses for women.', price: '$80' },
    { id: 22, name: 'Ptngnamo', category: 'womens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/womens_glasses/glasses-woman-3.png', description: 'Stylish sunglasses for women.', price: '$80' },
    { id: 23, name: 'Gaga', category: 'womens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/womens_glasses/glasses-woman-1.png', description: 'Stylish sunglasses for women.', price: '$80' },
    { id: 24, name: 'Hayop', category: 'womens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/womens_glasses/glasses-woman-2.png', description: 'Stylish sunglasses for women.', price: '$80' },
    { id: 25, name: 'Laurens', category: 'womens', type: 'Eyeglasses', image: './gallery/product_images/glasses_images/womens_glasses/glasses-woman-3.png', description: 'Stylish sunglasses for women.', price: '$80' },
];

const cart = [];
fitlerTitle = document.getElementById("glasses-span");

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});

function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="description">${product.description}</p>
            <p class="price">${product.price}</p>
            <p class="category">Category: ${product.category}</p>
            <p class="type">Type: ${product.type}</p>
        `;
        productElement.onclick = () => addToCart(product.id);
        productList.appendChild(productElement);
    });
}

function filterProducts(category) {
    if (category === 'all') {
        renderProducts(products);
        fitlerTitle.innerHTML = category.charAt(0).toUpperCase() + category.slice(1);

    } else {
        const filteredProducts = products.filter(product => product.category === category);
        renderProducts(filteredProducts);
        fitlerTitle.innerHTML = category.charAt(0).toUpperCase() + category.slice(1, -1) + "'" + "s";
    }


}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        console.log(`${product.name} added to cart`);
        console.log('Cart:', cart);
    }
}

