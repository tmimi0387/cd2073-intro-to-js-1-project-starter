const products = [
  {
    name: "Cherry",
    price: 5,
    quantity: 0,
    productId: 1,
    image: "../images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 10,
    quantity: 0,
    productId: 2,
    image: "../images/orange.jpg"
  },
  {
    name: "Strawberry",
    price: 15,
    quantity: 0,
    productId: 3,
    image: "../images/strawberry.jpg"
  }
];

/* Images provided in /images folder. All images from Unsplash.com
  - cherry.jpg by Mae Mu
  - orange.jpg by Mae Mu
  - strawberry.jpg by Allec Gomes
*/

const cart = [];

function getProductById(productId) {
  for (let i = 0; i < products.length; i++) {  // iterate through products array
    if (productId === products[i].productId) {
      return products[i];  
    }
  }
  return null;
};

function addProductToCart(productId) {
  let product = getProductById(productId);
  product.quantity += 1;
  if (!cart.includes(product)) {
    cart.push(product);
  }
};

function increaseQuantity(productId) {
  let product = getProductById(productId);
  product.quantity += 1;
};

function decreaseQuantity(productId) {
  let product = getProductById(productId);
  product.quantity -= 1;
  if (product.quantity === 0) {
    let index = cart.indexOf(product);
    cart.splice(index, 1);
  }
};

function removeProductFromCart(productId) {
  let product = getProductById(productId);
  product.quantity = 0;
  let index = cart.indexOf(product);
  cart.splice(index, 1);
};

function cartTotal() {
  let total = 0;
  cart.forEach(product => {
    let itemTotal = product.price * product.quantity;
    total += itemTotal;
  });
  return total;
};

function emptyCart() {
  cart = [];
};

let amountPaid = 0;
function pay(amount) {
  amountPaid += amount;
  let changeDue = amountPaid - cartTotal();
  if (changeDue >= 0) {
    amountPaid = 0;
  }
  return changeDue;
};

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
  To fully complete this project, it is expected that all tests pass.
  Run the following command in terminal to run tests
  npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}