let nickname = "Shaolin matador de porco";
let exp = 9000;


if (exp <= 1000){
  console.log("O jogador " + nickname + " tem " + exp + " de XP e é nivel Ferro");
}else if (exp > 1000 && exp <= 2000){
  console.log("O jogador " + nickname + " tem " + exp + " de XP e é nivel Bronze");
}else if (exp > 2000 && exp <= 5000){
  console.log("O jogador " + nickname + " tem " + exp + " de XP e é nivel Prata");
}else if (exp > 5000 && exp <= 7000){
  console.log("O jogador " + nickname + " tem " + exp + " de XP e é nivel Ouro");
}else if (exp > 7000 && exp <= 8000){
  console.log("O jogador " + nickname + " tem " + exp + " de XP e é nivel Platina");
}else if (exp > 8000 && exp <= 9000){
  console.log("O jogador " + nickname + " tem " + exp + " de XP e é nivel Ascendente");
}else if (exp > 9000 && exp <= 10000){
  console.log("O jogador " + nickname + " tem " + exp + " de XP e é nivel Imortal");
}else if(exp > 10000){
  console.log("O jogador " + nickname + " tem " + exp + " de XP e é nivel Radiante");
}

