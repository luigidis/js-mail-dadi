// console.log('ciao');
// Prendo Elemento del body dove appenderò gli ultimi elementi contenuti nell'array
const domElement = document.querySelector('div')
console.log(domElement)
// Creo un array con 5+ elementi
const elementiRandom = ['Quo', 'Qui', 'Qua', 'Paperina', 'Paperino', 'Zio Paperone', , 'Topolina', 'Topolino', 'Pluto', 'Pippo', 'Luigi']
// console.log(elementiRandom)
// console.log(elementiRandom.length)
// Creo un ciclo che si ripete 5 volte perchè devo prendere gli ultimi 5 elementi dell'array
for (let i = 0; i < 5; i++) {
    // console.log('ciao')
    // Creo una costante che mi va a prendere per ogni iterazione dall'ultimo a n elementi finali dell'array
    const numeroDaSottrarre = elementiRandom.length - (i + 1)
    // console.log(numeroDaSottrarre)
    console.log(elementiRandom[numeroDaSottrarre])
    // Creo un elemento div
    const divElement = document.createElement('div')
    // All'elemento creato metto l'item dell'array che ho per ogni iterazione
    divElement.append(elementiRandom[numeroDaSottrarre])
    // Inserisco il div creato nel dom
    domElement.append(divElement)
}

    