let table = document.querySelector('#sampleTable')
function insert_Row() {
    let newRow = document.createElement('tr');
    let cell1 = document.createElement('td');alet table = document.querySelector('#sampleTable');
let button = document.querySelector('input[type="button"]'); // Add this line

function insert_Row() {
  let newRow = document.createElement('tr');
  let cell1 = document.createElement('td');
  cell1.textContent = 'New Cell 1';

  let cell2 = document.createElement('td');
  cell2.textContent = 'New Cell 2';

  newRow.appendChild(cell1);
  newRow.appendChild(cell2);

  table.insertBefore(newRow, table.firstChild);
}

// Change event listener from the table to the button
button.addEventListener('click', insert_Row);

    cell1.textContent = 'New Cell 1';
    
    let cell2 = document.createElement('td');
    cell2.textContent = 'New Cell 2';

    newRow.appendChild(cell1);  // Append cell1 to newRow
    newRow.appendChild(cell2);  // Append cell2 to newRow

    // Insert newRow at the beginning of the table
    table.insertBefore(newRow, table.firstChild);
}
table.addEventListener('click', insert_Row);