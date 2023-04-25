// Get all the prices from the table
const prices = document.querySelectorAll('[data-ns-test="prices"]');

// Initialize the total price
let totalPrice = 0;

// Loop through the prices and add them to the total price
prices.forEach(price => {
  totalPrice += parseFloat(price.innerText);
});

// Get the element where the total price will be displayed
const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');

// Set the text of the element to the total price
grandTotal.innerText = totalPrice.toString();
