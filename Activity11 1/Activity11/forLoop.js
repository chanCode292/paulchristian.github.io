function runForLoop() {
    
    let num = document.getElementById('numFor').value;
    let text = document.getElementById('textFor').value;
    let output = '';

    
    num = parseInt(num);

    
    if (isNaN(num) || num <= 0) {
        output = 'Please enter a valid number greater than 0.';
    } else {
        
        for (let i = 0; i < num; i++) {
            output += `${text}<br>`;  
        }
    }

    
    document.getElementById('forOutput').innerHTML = output;
    function clearfor(){
        document.getElementById('forOutput').innerHTML='';
    }
}
