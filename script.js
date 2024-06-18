function addToCart(productName, price) {
    var li = document.createElement("li");
    li.innerText = productName + " - ₹" + price.toFixed(2);
  
    var cartItems = document.getElementById("cartItems");
    cartItems.appendChild(li);
  
    var totalPrice = document.getElementById("totalPrice");
    var currentTotal = parseFloat(totalPrice.innerText.replace("Total: ₹", ""));
    var newTotal = currentTotal + price;
    totalPrice.innerText = "Total: ₹" + newTotal.toFixed(2);
  }
  
  function checkout() {
    var cartItems = document.getElementById("cartItems");
    var totalPrice = document.getElementById("totalPrice");
  
    // Display a confirmation message with the cart items and total price
    alert("Thank you for your purchase!\n\nCart Items:\n" + cartItems.innerHTML + "\nTotal Price: " + totalPrice.innerText);
  
    // Clear the cart items and reset the total price
    cartItems.innerHTML = "";
    totalPrice.innerText = "Total: ₹0";
  }
  const addProductButton = document.getElementById('addProductButton');
  const productList = document.getElementById('productList');
  
  let productId = 1;
  
  addProductButton.addEventListener('click', () => {
      const product = createProductElement(`Product ${productId}`);
      productList.appendChild(product);
      productId++;
  });
  
  function createProductElement(productName) {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.textContent = productName;
      return productElement;
  }
  