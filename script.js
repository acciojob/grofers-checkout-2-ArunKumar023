//your code here

const prices = document.querySelectorAll('[data-ns-test="prices"]');

let total = 0;
prices.forEach(price => {
  total += parseFloat(price.textContent);
});

const newRow = document.createElement('tr');

const newCell = document.createElement('td');

newCell.setAttribute('data-ns-test', 'grandTotal');

newCell.textContent = total.toFixed(2);

newRow.appendChild(newCell);

const table = document.querySelector('table');
table.appendChild(newRow);
