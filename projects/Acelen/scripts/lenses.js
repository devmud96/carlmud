const products = [
    { id: 1, name: '', category: 'daily', type: 'Daily Contact Lenses', image: './gallery/contactlenses_images/daily1.png', description: 'example contact lense.', price: '$20' },
    { id: 2, name: '', category: 'daily', type: 'Daily Contact Lenses', image: './gallery/contactlenses_images/daily2.png', description: 'example contact lense.', price: '$20' },
    { id: 3, name: '', category: 'daily', type: 'Daily Contact Lenses', image: './gallery/contactlenses_images/daily3.png', description: 'example contact lense.', price: '$20' },
    { id: 4, name: '', category: 'monthly', type: 'Monthly Contact Lenses', image: './gallery/contactlenses_images/monthly1.png', description: 'example contact lense.', price: '$30' },
    { id: 5, name: '', category: 'monthly', type: 'Monthly Contact Lenses', image: './gallery/contactlenses_images/monthly2.png', description: 'example contact lense.', price: '$30' },
    { id: 6, name: '', category: 'monthly', type: 'Monthly Contact Lenses', image: './gallery/contactlenses_images/monthly3.png', description: 'example contact lense.', price: '$30' },
    { id: 7, name: '', category: 'fortnightly', type: 'Fortnightly Contact Lenses', image: './gallery/contactlenses_images/fortnightly1.png', description: 'example contact lense.', price: '$25' },
    { id: 8, name: '', category: 'fortnightly', type: 'Fortnightly Contact Lenses', image: './gallery/contactlenses_images/fortnightly2.png', description: 'example contact lense.', price: '$25' },
    { id: 9, name: '', category: 'fortnightly', type: 'Fortnightly Contact Lenses', image: './gallery/contactlenses_images/fortnightly3.png', description: 'example contact lense.', price: '$25' },
    { id: 1, name: '', category: 'daily', type: 'Daily Contact Lenses', image: './gallery/contactlenses_images/daily1.png', description: 'example contact lense.', price: '$20' },
    { id: 2, name: '', category: 'daily', type: 'Daily Contact Lenses', image: './gallery/contactlenses_images/daily2.png', description: 'example contact lense.', price: '$20' },
    { id: 3, name: '', category: 'daily', type: 'Daily Contact Lenses', image: './gallery/contactlenses_images/daily3.png', description: 'example contact lense.', price: '$20' },
    { id: 4, name: '', category: 'monthly', type: 'Monthly Contact Lenses', image: './gallery/contactlenses_images/monthly1.png', description: 'example contact lense.', price: '$30' },
    { id: 5, name: '', category: 'monthly', type: 'Monthly Contact Lenses', image: './gallery/contactlenses_images/monthly2.png', description: 'example contact lense.', price: '$30' },
    { id: 6, name: '', category: 'monthly', type: 'Monthly Contact Lenses', image: './gallery/contactlenses_images/monthly3.png', description: 'example contact lense.', price: '$30' },
    { id: 7, name: '', category: 'fortnightly', type: 'Fortnightly Contact Lenses', image: './gallery/contactlenses_images/fortnightly1.png', description: 'example contact lense.', price: '$25' },
    { id: 8, name: '', category: 'fortnightly', type: 'Fortnightly Contact Lenses', image: './gallery/contactlenses_images/fortnightly2.png', description: 'example contact lense.', price: '$25' },
    { id: 9, name: '', category: 'fortnightly', type: 'Fortnightly Contact Lenses', image: './gallery/contactlenses_images/fortnightly3.png', description: 'example contact lense.', price: '$25' },






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
        fitlerTitle.innerHTML = category.charAt(0).toUpperCase() + category.slice(1);
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

