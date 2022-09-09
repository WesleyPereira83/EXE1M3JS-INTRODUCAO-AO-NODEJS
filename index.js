
var index = require("readline-sync")

var nota1 = Number(index.question('Inisra sua primeira nota:'))
var nota2 = Number(index.question('Inisra sua segunda nota:'))
var nota3 = Number(index.question('Inisra sua terceira nota:'))
media = (nota1 + nota2 + nota3)/3

let status =  media >=7 ? 'Aprovado.':'Reprovado.'

console.log('A média calculada foi ' + media.toFixed(1) + ', o aluno está ' + status)
