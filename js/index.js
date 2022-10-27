// ITERATION 1

function updateSubtotal(product) {
  
  let quantity = product.querySelector('.quantity input').value;
  let price = product.querySelector('.price span').innerHTML;
  let subTotal = quantity * price;

  product.querySelector('.subtotal span').innerHTML = subTotal;
  return subTotal;

} 

function calculateAll() {
  // ITERATION 2 & ITERATION 3
  let products = document.getElementsByClassName('product');

  let total = 0;
  for (let i = 0; i < products.length; i++) {
    let char = updateSubtotal(products[i]); 
    total += char;
  }

  

  let totalPrice = document.querySelector('#total-value span');
  totalPrice.innerText = total;
  return totalPrice.innerText;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const tbody = target.parentNode.parentNode.parentNode;
  tbody.removeChild(target.parentNode.parentNode);
  console.log('The target in remove is:', target);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  tbody.appendChild(tr)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn btn-remove');
  removeBtn.forEach(function(removeProductBtn){
    removeProductBtn.addEventListener('click', removeProduct);
  })
});
