const nums = [1, 2, 3, 4, 5]
const double = n => n * 2
console.log(nums.map(double));

const names = ['Cynthia', 'Amora', 'Pedro', 'Wilson']
const firstChar = personName => personName[0].toLowerCase()
const lastChar = personName => personName.substring(personName.length - 1)
console.log(names.map(firstChar));
console.log(names.map(lastChar));

const cart = [
  { name: 'Caneta', qty: 10, price: 7.99 },
  { name: 'Impressora', qty: 0, price: 649.50 },
  { name: 'Caderno', qty: 4, price: 27.10 },
  { name: 'Lápis', qty: 3, price: 2.99 },
  { name: 'Borracha', qty: 50, price: 1.99 },
]

const getName = item => item.name
console.log(cart.map(getName));

const invetory = item => item.qty * item.price
console.log(cart.map(invetory));
