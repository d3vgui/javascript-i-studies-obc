alert("Olá, recruta! Por favor, preencha os campos a seguir.")

const primeiroNome = prompt("Qual é o seu primeiro nome?")
const sobrenome = prompt("Agora, nos diga o seu sobrenome:")

const campoEstudo = prompt("Qual o seu campo de estudo?")
const anoNascimento = prompt("Em qual ano você nasceu?")
const idade = 2025 - anoNascimento

alert(
    "DADOS COLETADOS\n" +
    "Nome: " + primeiroNome + " " + sobrenome + "\n" +
    "Campo de estudo: " + campoEstudo + "\n" +
    "Idade: " + idade
);
