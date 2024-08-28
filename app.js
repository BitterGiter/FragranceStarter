document.getElementById('fragrance-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const fragrance = document.getElementById('fragrance-input').value;
    const response = await fetch(`YOUR_API_ENDPOINT?fragrance=${fragrance}`);
    const data = await response.json();
    displayResults(data);
});

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h2>Complementary Fragrances:</h2>';
    data.complementaryFragrances.forEach(fragrance => {
        resultsDiv.innerHTML += `<p>${fragrance}</p>`;
    });
}
