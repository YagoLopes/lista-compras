const form = document.getElementById('form-lista');
form.addEventListener('submit', saveFormInfo);

function saveFormInfo(event) {
  const InputNameProduto = document.getElementById('input-name-produto');
  console.log(InputNameProduto.target);
  // const InputPriceProduto = document.getElementById('input-price-produto');
  event.preventDefault();
  alert('Mautheusão Malucão!!');
}
