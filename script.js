// script.js

// Shopping Cart Functionality
class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    addItem(item) {
        this.cart.push(item);
    }

    removeItem(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
    }

    getItems() {
        return this.cart;
    }

    getTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
    }
}

// Search Functionality
function searchItems(items, query) {
    return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
}

// Contact Form Functionality
function submitContactForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('Contact Form Submitted:', data);
    // Here you would normally send the data to a server
}

// Example usage
const cart = new ShoppingCart();
cart.addItem({ id: 1, name: 'Item 1', price: 10 });
console.log(cart.getTotal());

// This function would be a form event handler
// document.getElementById('contactForm').addEventListener('submit', submitContactForm);