function getNamesFromInput() {
    const input = document.getElementById('nameInput').value;
    return input.split('\n').map(name => name.trim()).filter(name => name !== '');
  }

  function pickName() {
    let namesArray = getNamesFromInput();

    if (namesArray.length === 0) {
      document.getElementById('result').textContent = 'Please enter names to begin';
      return;
    }

    const randomIndex = Math.floor(Math.random() * namesArray.length);
    const selectedName = namesArray[randomIndex];

    
    document.getElementById('result').innerHTML = `
      <div>Total names: <strong>${namesArray.length}</strong></div>
      <div>Picked position: <strong>${randomIndex + 1}</strong></div>
      <div class="highlight">Picked: ${selectedName}</div>
    `;
  }

  function clearAll() {
    document.getElementById('nameInput').value = '';
    document.getElementById('result').textContent = '';
  }