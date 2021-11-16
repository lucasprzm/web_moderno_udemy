// Novo Recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // tirar nome e idade do objeto pessoa.
console.log(nome, idade)

const {nome:n, idade:i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa // Se não tiver valor de bem humorada, o valor true é definido. Quando não tem o valor definido, retorna como undefined.
console.log(sobrenome,bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro,numero, cep)