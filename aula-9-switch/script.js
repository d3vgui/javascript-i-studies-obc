const resultado = prompt(
  "Escolha uma alternativa:" +
  "\n\nA) Letra A" +
  "\nB) Letra B" +
  "\nC) Letra C"
)

switch (resultado){
  case "a":
    alert("o resultado é A")
    break
  case "b":
    alert("o resultado é B")
    break
  case "c":
    alert("o resultado é C")
    break
  default:
    alert("Finalizando...")  
}