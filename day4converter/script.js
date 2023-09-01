const apiKey = 'YOUR_API_KEY'; 

const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const switchBtn = document.getElementById('switchBtn');
const convertedAmountInput = document.getElementById('convertedAmount');

let exchangeRates = {};


fetch(`https://v6.exchangeratesapi.io/latest?access_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        exchangeRates = data.rates;
        const currencies = Object.keys(exchangeRates);
        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency;
            option1.textContent = currency;
            const option2 = document.createElement('option');
            option2.value = currency;
            option2.textContent = currency;
            fromCurrencySelect.appendChild(option1);
            toCurrencySelect.appendChild(option2);
        });
    })
    .catch(error => console.error('Error fetching currencies:', error));


amountInput.addEventListener('input', convertCurrency);

fromCurrencySelect.addEventListener('change', convertCurrency);
toCurrencySelect.addEventListener('change', convertCurrency);

switchBtn.addEventListener('click', () => {
    const fromCurrencyValue = fromCurrencySelect.value;
    const toCurrencyValue = toCurrencySelect.value;
    fromCurrencySelect.value = toCurrencyValue;
    toCurrencySelect.value = fromCurrencyValue;
    convertCurrency();
});

function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    
    if (!isNaN(amount) && fromCurrency && toCurrency) {
        const convertedAmount = (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
        convertedAmountInput.value = convertedAmount.toFixed(2);
    } else {
        convertedAmountInput.value = '';
    }
}
