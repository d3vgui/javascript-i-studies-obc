alert("Olá! Por favor, informe dois valores:")

const num1 = parseFloat(prompt("Informe o primeiro número:"))
const num2 = parseFloat(prompt("Informe o segundo número:"))

const soma = num1 + num2
const subtracao = num1 - num2
const multiplicacao = num1 * num2
const divisao = num1 / num2


alert(
    "RESULTADO DAS 4 OPERACOES\n\n" +
    "Soma: " + soma + "\n" +
    "Subtração: " + subtracao + "\n" +
    "Multiplicação: " + multiplicacao + "\n" +
    "Divisão: " + divisao + "\n"
 )