// Task 1: Pizza class
class Pizza {
  constructor(name, toppings, basePrice) {
    this.name = name;
    this.toppings = toppings;
    this.basePrice = basePrice;
  }

  calculatePrice() {
    // Calculate price based on base price and number of toppings
    const pricePerTopping = 1.5;
    const totalPrice = this.basePrice + this.toppings.length * pricePerTopping;
    return totalPrice;
  }
}

// Task 2: Order class
class Order {
  constructor(customerName, deliveryType) {
    this.customerName = customerName;
    this.deliveryType = deliveryType;
    this.pizzas = [];
  }

  addPizza(pizza) {
    // Add a pizza to the order
    this.pizzas.push(pizza);
  }

  getTotalPrice() {
    // Calculate total price of the order by summing up prices of all pizzas
    let totalPrice = 0;
    this.pizzas.forEach((pizza) => {
      totalPrice += pizza.calculatePrice();
    });
    return totalPrice;
  }
}

// Step#1 Getting elements from document
const name = document.querySelector('#name').value;
const form = document.querySelector('form');
const sizes = document.querySelectorAll('input[name="size"]');
const toppings = document.querySelectorAll('input[name="topping"]');
const delivery = document.querySelector('#delivery');
const price = document.querySelector('#price');
const submitButton = document.querySelector('#submit');
// Example usage:

// Create pizzas
const pizza1 = new Pizza('Margherita', ['cheese', 'tomato'], 8);

// Create an order
const order = new Order('John Joe', 'delivery');

// Add pizzas to the order
order.addPizza(pizza1);

// Get total price of the order
const totalPrice = order.getTotalPrice();
price.textContent = `Total price of the order: $${totalPrice}`;
// Checking whether size is selected or not
function checkedSize() {
  const selectedSize = document.querySelectorAll('[name="size"]:checked');
  if (selectedSize.length <= 0) {
    window.alert('Hello Sir! Please choose the pizza size! ☺️ ');
  }
}
// Step#3 Trigger the functions
form.addEventListener('input', totalPrice);
submitButton.addEventListener('click', checkedSize);
