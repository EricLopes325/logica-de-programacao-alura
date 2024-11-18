alert ("Boas vindas ao jogo do número secreto");
let numeroSecreto = 15;
let chute;
let tentativas = 1;

// enquanto (while) não for igual ao numeroSecreto
// != Diferente 
while (chute != numeroSecreto) {
    chute = prompt ("Escolha um número entre 1 e 30");
    // se chute for igual a numeroSecreto
    if (chute == numeroSecreto) {
        alert (`Boa, você descubriu o número secreto!! o número ${numeroSecreto}. Para chegar ao numero correto foram ${tentativas} tentativas`); //para colocar uma variavel dento do texto, temos que colocar as "crazes" = `, e quando for inserir a variavel, colocar o "${nomedavariavel}"
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