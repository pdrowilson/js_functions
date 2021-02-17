const cart = [
  { nome: 'Caneta', qtd: 10, preco: 7.99, sale: 30 },
  { nome: 'Impressora', qtd: 0, preco: 649.50, sale: 50},
  { nome: 'Caderno', qtd: 4, preco: 27.10, sale: 0},
  { nome: 'Lápis', qtd: 3, preco: 2.99, sale: 10 },
  { nome: 'Borracha', qtd: 50, preco: 1.99, sale: 0 },
]

const getName = item => item.nome
const greaterThanZero = item => item.qtd > 0
const sale = item => item.sale > 0
const sale30Plus = item => item.sale >= 30
const validItems = cart.filter(greaterThanZero)
const saleItems = cart.filter(sale)
const sale50 = cart.filter(sale30Plus)

console.log(validItems.map(getName))
console.log(saleItems.map(getName))
console.log(sale50.map(getName))