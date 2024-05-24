const USD = 5.17;
const EUR = 5.61;
const GBP = 6.58;

const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');

amount.addEventListener('input', ()=>{
  const hasCharacteresRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacteresRegex, '');
});

form.onsubmit = (event) =>{
  event.preventDefault();

  switch(currency.value){
    case 'USD':
      convertCurrency(amount.value, USD, 'US$')
      break
    case 'EUR':
      convertCurrency(amount.value, EUR, '€')
      break
    case 'GBP':
      convertCurrency(amount.value, GBP, '£')
  }
}

function convertCurrency(amount, price, symbol){
  console.log(amount);
  console.log(price);
  console.log(symbol);
}