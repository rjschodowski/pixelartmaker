$(document).ready(function() {

// Select color input
// Select size input

let colorPicker = $('#colorPicker').val();
let table = $('#pixelCanvas');


// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  for (let n = 1; n <= height; n++) {
    let row = $('<tr></tr>');
    
    for (let m = 1; m <= width; m++) {
      row.append('<td></td>');

    }
    table.append(row);
    
  }

}

function removeGrid () {
  $('tr').remove();

}

$('#submitButton').on('click', function(e) {
    e.preventDefault();
    removeGrid();
    let height = $('#inputHeight').val();
    let width = $('#inputWidth').val();
    makeGrid(height, width);
});

$('#colorPicker').on('change', function () {
 colorPicker = $('#colorPicker').val();

});

$(pixelCanvas).on('click', 'td', function(){
  $(this).css('background-color', colorPicker);

});

});