//your code here
// Get all the prices from the table
  const prices = document.querySelectorAll('[data-ns-test="prices"]');

  // Initialize the total price to zero
  let totalPrice = 0;

  // Loop through each price and add it to the total price
  prices.forEach(price => {
    totalPrice += parseFloat(price.innerText);
  });

  // Set the total price in the last row of the table
  const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
  grandTotal.innerText = totalPrice.toFixed(2);