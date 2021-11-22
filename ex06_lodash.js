const _ = require('lodash')

const alunos = [{
    nome: 'Joao',
    nota: 6
}, {
    nome: 'Maria',
    nota: 5
}, {
    nome: 'Certidão de Nascimento',
    nota: 7
}]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media)