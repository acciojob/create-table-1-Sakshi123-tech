function insert_Row() {
    // Get the table element using its ID
    var table = document.getElementById("sampleTable");

    // Create a new row element
    var newRow = table.insertRow(0); // Insert at the top of the table (index 0)

    // Create new cells for the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Set the text content for the cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
