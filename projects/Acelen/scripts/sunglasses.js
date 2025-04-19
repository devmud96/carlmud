const products = [
    { id: 1, name: 'Robals', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/kids-sunglasses/kids-sunglasses-1.png', description: 'Colorful glasses for kids.', price: '$65' },
    { id: 2, name: 'Cohn', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/kids-sunglasses/kids-sunglasses-2.png', description: 'Colorful glasses for kids.', price: '$25' },
    { id: 14, name: 'Malan', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/men-sunglasses/men-sunglasses-2.png', description: 'Shades for men.', price: '$70' },
    { id: 3, name: 'Minus', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/kids-sunglasses/kids-sunglasses-3.png', description: 'Colorful glasses for kids.', price: '$70' },
    { id: 4, name: 'Robals', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/kids-sunglasses/kids-sunglasses-1.png', description: 'Colorful glasses for kids.', price: '$65' },
    { id: 5, name: 'Cohn', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/kids-sunglasses/kids-sunglasses-2.png', description: 'Colorful glasses for kids.', price: '$25' },
    { id: 6, name: 'Gara', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/kids-sunglasses/kids-sunglasses-3.png', description: 'Colorful glasses for kids.', price: '$70' },
    { id: 13, name: 'Lorn', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/men-sunglasses/men-sunglasses-3.png', description: 'Shades for men.', price: '$70' },
    { id: 7, name: 'Clax', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/kids-sunglasses/kids-sunglasses-1.png', description: 'Colorful glasses for kids.', price: '$65' },
    { id: 8, name: 'Shotel', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/kids-sunglasses/kids-sunglasses-2.png', description: 'Colorful glasses for kids.', price: '$25' },
    { id: 9, name: 'Narcan', category: 'kids', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/kids-sunglasses/kids-sunglasses-3.png', description: 'Colorful glasses for kids.', price: '$70' },
    { id: 10, name: 'Hamprex', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/men-sunglasses/men-sunglasses-1.png', description: 'Shades for men.', price: '$70' },
    { id: 11, name: 'Vel', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/men-sunglasses/men-sunglasses-2.png', description: 'Shades for men.', price: '$70' },

    { id: 12, name: 'Valaxy', category: 'mens', type: 'Eyeglasses', image: './gallery/product_images/sunglasses_images/men-sunglasses/men-sunglasses-3.png', description: 'Shades for men.', price: '$70' },



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

