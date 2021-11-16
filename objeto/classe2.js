class Avo {
    constructor (sobrenome) {
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo { // extends cria herança
    constructor (sobrenome, profissao = 'Professor') {
        super (sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor () {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)