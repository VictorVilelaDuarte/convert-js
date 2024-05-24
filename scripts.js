const amount = document.getElementById('amount');

amount.addEventListener('input', ()=>{
  const hasCharacteresRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacteresRegex, '');
})