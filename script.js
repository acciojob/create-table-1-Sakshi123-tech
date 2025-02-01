let table = document.querySelector('#sampleTable')

function insert_Row() {
    let newRow = document.createElement('tr');
    let cell1 = document.createElement('td');
    cell1.textContent = 'New Cell 1';
    
    let cell2 = document.createElement('td');
    cell2.textContent = 'New Cell 2';

    newRow.appendChild(cell1);  // Append cell1 to newRow
    newRow.appendChild(cell2);  // Append cell2 to newRow
    table.appendChild(newRow);  // Append newRow to table
}

table.addEventListener('click', insert_Row);