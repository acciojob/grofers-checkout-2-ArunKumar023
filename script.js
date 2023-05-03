//your code here

 // Get all the elements that store the prices of the items in the table
const prices = document.querySelectorAll('[data-ns-test="prices"]');

// Calculate the total price of all the items
let total = 0;
prices.forEach(price => {
  total += parseFloat(price.textContent);
});

// Create a new row for displaying the total price
const newRow = document.createElement('tr');

// Create a new cell for displaying the total price
const newCell = document.createElement('td');

// Set the data attribute for the new cell
newCell.setAttribute('data-ns-test', 'grandTotal');

// Set the text content for the new cell
newCell.textContent = total.toFixed(2);

// Add the new cell to the new row
newRow.appendChild(newCell);

// Add the new row to the bottom of the table
const table = document.querySelector('table');
table.appendChild(newRow);
