//your code here
// Get all elements that contain the item prices
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

// Initialize a variable to store the total price
let totalPrice = 0;

// Loop through each price element and add the price to the total
priceElements.forEach(priceElement => {
  totalPrice += parseFloat(priceElement.textContent);
});

// Create a new row for the total price
const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');
totalCell.setAttribute('colspan', '2');
totalCell.setAttribute('data-ns-test', 'grandTotal');
totalCell.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
totalRow.appendChild(totalCell);

// Add the new row to the table
const table = document.querySelector('table');
table.appendChild(totalRow);
