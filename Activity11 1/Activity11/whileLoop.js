function runWhileLoop() {
    
    let num = document.getElementById('numWhile').value;
    let text = document.getElementById('textWhile').value;
    let output = '';

    num = parseInt(num);

    
    if (isNaN(num) || num <= 0) {
        output = 'Please enter a valid number greater than 0.';
    } else {
        
        let i = 0;
        while (i < num) {
            output += `${text}<br>`;  
            i++;
        }
    }

    
    document.getElementById('whileOutput').innerHTML = output;
}
