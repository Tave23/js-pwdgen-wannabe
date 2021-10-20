/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */


const firstname = prompt ('Qual è il tuo nome?')
const surname = prompt('Qual è il tuo cognome?');
const prefColor = prompt('Qual è il tuo colore preferito?');

document.getElementById("Passwordgenerata").innerHTML =
`
   <h1>
       Password generata : ${firstname}${surname}${prefColor}21
   </h1>
`;


console.log(firstname);
console.log(surname);
console.log(prefColor);








