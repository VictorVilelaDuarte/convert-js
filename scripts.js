const USD = 5.17;
const EUR = 5.61;
const GBP = 6.58;

const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');

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
  try{
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`;

    footer.classList.add('show-result');

  }catch(error){
    console.log(error);
    footer.classList.remove('show-result');
    alert('Erro ao converter a moeda.')
  }
}

function formatCurrencyBRL(value){
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency', 
    currency: 'BRL'
  })
}