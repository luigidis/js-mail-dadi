// console.log('ciao')

const emailUser = prompt('Inserisci la tua email');

// creo un array dove consservo tutte le email che ho
const allEmails = ['pippo@prova.com', 'tizio@prova.com', 'sara@prova.com', 'grazia@prova.com'];
// console.log(allEmails);
// console.log(allEmails.length);

// Per ogni "cassetto" dell'array adesso dovrò verificare se ho il numero

for (let i = 0; i < allEmails.length; i++) {
    // console.log(i);
    // console.log(allEmails)
    if (emailUser === allEmails[i]) {
        alert('email consentita')
    }
}