function generateAlphabet() {
  const num = parseInt(document.getElementById('numInput').value);
  const output = document.getElementById('output');
  
  output.innerHTML = '';
  output.classList.remove('error');
  
  if (isNaN(num) || num < 1 || num > 26) {
      output.textContent = 'Please enter a number between 1 and 26';
      output.classList.add('error');
      return;
  }
  
  let result = [];
  for (let i = 0; i < num; i++) {
      result.push(String.fromCharCode(97 + i));
  }
  
  output.textContent = result.join(' ');
}

function clearOutput() {
  document.getElementById('output').textContent = '';
  document.getElementById('numInput').value = '';
  document.getElementById('numInput').innerHTML = '';
}