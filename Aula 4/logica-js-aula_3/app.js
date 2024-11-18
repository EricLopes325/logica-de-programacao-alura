alert ("Boas vindas ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

// enquanto (while) não for igual ao numeroSecreto
// != Diferente 
while (chute != numeroSecreto) {
    chute = prompt ("Escolha um número entre 1 e 100");
    // se chute for igual a numeroSecreto
    if (chute == numeroSecreto) {
        break
    }

    //se não for igual, então = (else)
    else {
        if (numeroSecreto > chute) {
            alert (`O número secreto é MAIOR que ${chute}`);
        }
        else {
            alert (`O número secreto é MENOR que ${chute}`);
        }
        
        // tentativa = tentativa + 1;
        // para atribuir mais 1: ++
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


// if (tentativas > 1 ) {
//     alert (`Boa, você descubriu o número secreto!! o número ${numeroSecreto}. Para chegar ao numero correto foram ${tentativas} tentativas`); } //para colocar uma variavel dento do texto, temos que colocar as "crazes" = `, e quando for inserir a variavel, colocar o "${nomedavariavel}"
// else {
//     alert (`Boa, você descubriu o número secreto!! o número ${numeroSecreto}. Para chegar ao numero correto foram ${tentativas} tentativa`); 
// }