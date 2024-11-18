alert ("Boas vindas ao jogo do número secreto");
let chute = prompt ("Escolha um número entre 1 e 30");

let numeroSecreto = 15;

// se chute for igual a numeroSecreto
if (chute == numeroSecreto) {
    alert (`Boa, você descubriu o número secreto!! ${numeroSecreto}`); //para colocar uma variavel dento do texto, temos que colocar as "crazes" = `, e quando for inserir a variavel, colocar o "${nomedavarial}"
}

//se não for igual, então = (else)
else {
    alert ("Você errou ):")
}