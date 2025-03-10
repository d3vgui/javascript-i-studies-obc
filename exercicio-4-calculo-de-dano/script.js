const nomeAtacante = prompt("Qual o nome do personagem atacante?")
const poderAtaque = parseFloat(prompt("Qual o poder de ataque desse personagem?"))

const nomeDefensor = prompt("Qual o nome do personagem defensor?")
const pontosDeVida = parseFloat(prompt("Qual a quantidade de pontos de vida do personagem defensor?"))
const poderDefesa = parseFloat(prompt("Qual o poder de defesa do personagem defensor?"))
const possuiEscudo = prompt("O personagem defender possui escudo? sim/não")

let danoCausado = 0

if(poderAtaque > poderDefesa && possuiEscudo === "não"){
    danoCausado = poderAtaque - poderDefesa
} else if (poderAtaque > poderDefesa && possuiEscudo === "sim"){
    danoCausado = (poderAtaque - poderDefesa) / 2
} else if (poderAtaque <= poderDefesa){
  danoCausado = 0
}

alert(
  "INFORMAÇÕES DOS JOGADORES\n\n" + 
  "Nome personagem atacante: " + nomeAtacante +
  "\nPoder de ataque: " + poderAtaque +
  "\nDano causado: " + danoCausado +
  "\n\nNome personagem defensor: " + nomeDefensor +
  "\nVida atual: " + (pontosDeVida - danoCausado) +
  "\nPoder de defesa: " + poderDefesa +
  "\nPossui escudo? " + possuiEscudo
)