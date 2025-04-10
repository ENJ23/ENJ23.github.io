document.getElementById('toggle-plan').addEventListener('change', function() {
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');

    if (this.checked) {
        monthlyPrices.forEach(price => price.style.display = 'none');
        annualPrices.forEach(price => price.style.display = 'table-cell');
    } else {
        monthlyPrices.forEach(price => price.style.display = 'table-cell');
        annualPrices.forEach(price => price.style.display = 'none');
    }
});