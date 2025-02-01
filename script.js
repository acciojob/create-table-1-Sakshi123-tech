let table = document.querySelector('#sampleTable');
let button = document.querySelector('input[type="button"]'); // Add this line

function insert_Row() {
  let newRow = document.createElement('tr');
  let cell1 = document.createElement('td');
  cell1.textContent = 'New Cell1';  // Ensure there's no space

  let cell2 = document.createElement('td');
  cell2.textContent = 'New Cell2';  // Ensure there's no space

  newRow.appendChild(cell1);
  newRow.appendChild(cell2);

  table.insertBefore(newRow, table.firstChild);
}

// Change event listener from the table to the button
button.addEventListener('click', insert_Row);
