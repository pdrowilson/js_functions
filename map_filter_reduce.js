const cart = [
  { name: 'Caneta', qty: 10, price: 7.99, sale: 30, fragile: true},
  { name: 'Impressora', qty: 0, price: 649.50, sale: 50, fragile: true},
  { name: 'Caderno', qty: 4, price: 27.10, sale: 0, fragile: false},
  { name: 'Lápis', qty: 3, price: 2.99, sale: 10, fragile: false},
  { name: 'Borracha', qty: 50, price: 1.99, sale: 0, fragile: true},
]

// 1. fragil: true
// 2. qtd * preco -> total
// 3. media totais

// 1.
const fragileItems = item => item.fragile == true
const showFragile = cart.filter(fragileItems)

console.log(showFragile.map(item => item.name))
