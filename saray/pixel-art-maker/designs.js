function cleanTable(){
    $('#pixelCanvas').empty();
}

function makeGrid() {
    var r = $('#inputHeight').val();
    var c = $('#inputWidth').val();
    for(var i = 1; i <= r; i++) {
        //add row
        $('#pixelCanvas').append('<tr></tr>');
        for(var j = 1; j <= c; j++){
            //add cell
            $('#pixelCanvas tr:last-child').append('<td></td>');
        }
    }
    $('td').click(function (evt) {
        var value = $('#colorPicker').val();
        $(evt.target).css('background', value);
    });
}

makeGrid();

$('.submit-button').click(function (evt) {
    evt.preventDefault();
    cleanTable();
    makeGrid();
});
