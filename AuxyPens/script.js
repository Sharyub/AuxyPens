let cartItems = [];
let totalPrice = 0; // Variable to keep track of total price

function addToCart(productName, productPrice) {
    // Add product to cart
    cartItems.push({ name: productName, price: productPrice });
    totalPrice += productPrice; // Add product price to total price
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartList = document.getElementById('cart-list');
    
    // Clear the current cart list
    cartList.innerHTML = '';

    // Populate the cart list with items
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });

    // Display the total price
    const totalPriceElement = document.createElement('li');
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`; // Format total price to two decimal places
    cartList.appendChild(totalPriceElement);

    // Update cart count
    cartCount.textContent = cartItems.length;
}

function showCart() {
    document.getElementById('cart-modal').style.display = 'block';
    updateCart(); // Ensure the cart is updated when shown
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}