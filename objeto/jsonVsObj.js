// conversão de JavaScript para JSON
const obj = {a:1, b:2, c:3, soma () {return a + b + c}}
console.log(JSON.stringify(obj))

// imprimindo em formato JSON
//console.log(JSON.parse("{a:1, b:2, c:3}"))
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"))
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))
console.log(JSON.parse('{ "a":1,"b": "string", "c": true, "d": {}, "e": []}')) // jsonlint.com site para verificar se é um JSON válido.