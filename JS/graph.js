var data = new google.visualization.DataTable();
data.addColumn('string', 'Employee Name');
data.addColumn('date', 'Start Date');
data.addRows(3);
data.setCell(0, 0, 'Mike');
data.setCell(0, 1, new Date(2008, 1, 28));
data.setCell(1, 0, 'Bob');
data.setCell(1, 1, new Date(2007, 5, 1));
data.setCell(2, 0, 'Alice');
data.setCell(2, 1, new Date(2006, 7, 16));

// Create a formatter.
// This example uses object literal notation to define the options.
var formatter = new google.visualization.DateFormat({formatType: 'long'});

// Reformat our data.
formatter.format(data, 1);

// Draw our data
var table = new google.visualization.Table(document.getElementById('dateformat_div'));
table.draw(data, {showRowNumber: true});