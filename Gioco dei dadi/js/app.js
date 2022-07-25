// console.log('ciao');

//Mi creo una variabile dove metterò il primo dado e lo "lancio"
const primoDado = ((Math.floor(Math.random() * 6)) + 1);
console.log(primoDado);
// Mi creo una variabile dove metterò il secondo dado e lo "lancio"
const secondoDado = ((Math.floor(Math.random() * 6)) +  1)
console.log(secondoDado)

// Se Primo Dado > Secondo Dado
if (primoDado > secondoDado) {
    console.log('Vince giocatore 1')
} else if (primoDado < secondoDado) {
    // Se Primo Dado < Secondo Dado
    console.log('Vince giocatore 2')
} else {
    // Se Primo Dado = Secondo Dado
    console.log('Risultato pari, tirare i dadi di nuovo')
}

