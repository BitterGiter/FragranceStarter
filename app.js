function getCatFact() {
  fetch('https://meowfacts.herokuapp.com/')
    .then(response => response.json())
    .then(data => {
      document.getElementById('cat-fact').innerText = data.data[0];
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('cat-fact').innerText = 'Failed to load cat fact.';
    });
}
