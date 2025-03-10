const nomeVeiculo1 = prompt("Qual o nome do primeiro veículo?")
const velocidadeVeiculo1 = parseFloat(prompt("Qual a velocidade do primeiro veículo? km/h"))

const nomeVeiculo2 = prompt("Qual é o nome do segundo veículo?")
const velocidadeVeiculo2 = prompt("Qual a velocidade do segundo veículo? km/h")

if (velocidadeVeiculo1 > velocidadeVeiculo2){
  alert(nomeVeiculo1 + " está mais rápido, andando à " + velocidadeVeiculo1 + "km/h")
} else if (velocidadeVeiculo2 > velocidadeVeiculo1){
  alert(nomeVeiculo2 + " está mais rápido, andando à " + velocidadeVeiculo2 + "km/h")
} else{
  alert("Os dois veículos estão na mesma velocidade.")
}