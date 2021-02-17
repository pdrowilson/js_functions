const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro));

const names = ['Cynthia', 'Amora', 'Pedro', 'Wilson']
const firstChar = personName => personName[0].toLowerCase()
const lastChar = personName => personName.substring(personName.length - 1)
console.log(names.map(firstChar));
console.log(names.map(lastChar));

const carrinho = [
  { nome: 'Caneta', qtd: 10, preco: 7.99 },
  { nome: 'Impressora', qtd: 0, preco: 649.50 },
  { nome: 'Caderno', qtd: 4, preco: 27.10 },
  { nome: 'Lápis', qtd: 3, preco: 2.99 },
  { nome: 'Borracha', qtd: 50, preco: 1.99 },
]

const getName = item => item.nome
console.log(carrinho.map(getName));

const valorEstoque = item => item.qtd * item.preco
console.log(carrinho.map(valorEstoque));
