//nome do heroi
let nomeHeroi = "guerreiro"
console.log("nome do jogador: " + nomeHeroi)

//xp
let xpDoJogador = 8053
let xpNecessario = 8001
let subirDeClass = xpDoJogador >= xpNecessario
console.log("o jogador pode subir de class: " + subirDeClass)

//class
let mensagem = 0
do {
  console.log("o jogador subiu de class")
  mensagem++
} while (mensagem < 1)

//class final
let Class = "ascendente"

switch (Class) {
 case "ascendente":
  console.log("o jogador guerreiro chegou a class ascendente")
  break

  case "imortal":
    console.log("o jogador guerreiro chegou a class imortal")
    break

  case "radiante":
    console.log("o jogador guerreiro chegou a class radiante")
    break
}
