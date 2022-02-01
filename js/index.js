// ITERATION 1



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span")
  let quantity = product.querySelector(".quantity input")

  let priceNumber = price.innerHTML
  let quantityNumber = quantity.value
  let subtotalPrice = priceNumber * quantityNumber

  let subtotalDOM = product.querySelector(".subtotal span")

  subtotalDOM.innerText =  subtotalPrice

  return subtotalPrice
  
}


function calculateAll() {
  
  
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  let allProducts = document.querySelectorAll(".product");
  let allSubTotal = 0
  let totalPrice = document.querySelector("#total-value span")

  

  allProducts.forEach((eachProduct)=> {
    let subTotalExtra = updateSubtotal(eachProduct)
    allSubTotal += subTotalExtra
    

  })

  totalPrice.innerText = allSubTotal

  





  



}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //let parentNode = document.querySelectorAll(".product")
  console.log('The target in remove is:', target);
  event.target.parentNode.parentNode.remove()
  calculateAll()


}

// ITERATION 5

function createProduct() {


  console.log("holaaa")  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButton = document.querySelectorAll(".btn-remove")

  removeButton.forEach((eachButton) => {
    eachButton.addEventListener("click", removeProduct)
  })

  let addButton = document.querySelector("#create")
  addButton.addEventListener("click", createProduct)

  

  let inputName = document.querySelector("#inputNameid")
  let inputNumber = document.querySelector("#inputNumberid")
  let newProduct = document.querySelector("#newProduct")

  let newBlock = document.querySelector(".product")

  let newItem = document.createElement("td")
  
  newItem.innerText = newBlock

  newProduct.appendChild(newItem)








  
});
