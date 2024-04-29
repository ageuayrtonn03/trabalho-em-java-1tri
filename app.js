alert('Descubra a porra do número secreto');
let numeroSecreto = parseInt(Math.random()*100+1) ;
console.log(numeroSecreto)
let chute = prompt('Escolha um número de 1 a 100');
let tentativas = 1;

//enquanto o chute não for igual o número secreto
while (chute != numeroSecreto)
{chute = prompt('Escolha um número de 1 a 100');
//se o chute for igual ao número secreto
if (chute == numeroSecreto){
 break;
} else {
    if (chute > numeroSecreto){
        alert(`o número secreto é menor ${chute}`)
    } 
    else{
        alert(`o número secreto é maior que ${chute}`)
    }
    //tentativa=tentativa + 1
    tentativas++
}
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai porra! Você descobriu o número secreto que é ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`);
