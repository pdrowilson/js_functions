const cart = [
  { name: 'Caneta', qty: 10, price: 7.99, sale: 30 },
  { name: 'Impressora', qty: 0, price: 649.50, sale: 50},
  { name: 'Caderno', qty: 4, price: 27.10, sale: 0},
  { name: 'Lápis', qty: 3, price: 2.99, sale: 10 },
  { name: 'Borracha', qty: 50, price: 1.99, sale: 0 },
]

const getTotal = item => item.qty * item.price
const sumAll = (acc, el) => acc + el

const getTotalArr = cart.map(getTotal)
console.log(getTotalArr)

const getTotalAll = getTotalArr.reduce(sumAll)
console.log(getTotalAll)