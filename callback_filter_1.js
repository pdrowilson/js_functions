const cart = [
  { name: 'Caneta', qty: 10, price: 7.99, sale: 30 },
  { name: 'Impressora', qty: 0, price: 649.50, sale: 50},
  { name: 'Caderno', qty: 4, price: 27.10, sale: 0},
  { name: 'Lápis', qty: 3, price: 2.99, sale: 10 },
  { name: 'Borracha', qty: 50, price: 1.99, sale: 0 },
]

const getName = item => item.name
const greaterThanZero = item => item.qty > 0
const sale = item => item.sale > 0
const sale30Plus = item => item.sale >= 30
const validItems = cart.filter(greaterThanZero)
const saleItems = cart.filter(sale)
const sale50 = cart.filter(sale30Plus)

console.log(validItems.map(getName))
console.log(saleItems.map(getName))
console.log(sale50.map(getName))