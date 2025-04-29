
function dowhileLoop () {
    const num3 = parseFloat (document.getElementById('num3').value);
    const text3 = document.getElementById('text3').value;
    let result = '';

    if ( isNaN(num3) || text3.trim() === '' ) {
        alert('Fields must not be empty!');
        return;
    }

    let i = 0
    do {
        result += text3 + '<br>';
        i++
    } while ( i < num3 );
    document.getElementById('printdowhile').innerHTML = result;
}

function cleardowhile () {
    document.getElementById('printdowhile').innerHTML = '';
}
