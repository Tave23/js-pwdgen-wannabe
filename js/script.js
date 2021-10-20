/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */


const firstname = prompt ('Qual è il tuo nome?')
const surname = prompt('Qual è il tuo cognome?');
const prefColor = prompt('Qual è il tuo colore preferito?');

// let password = firstname + surname + prefColor + 21;
let password = `${firstname}${surname}${prefColor}21`;

document.getElementById("passwordgenerata").innerHTML =
`
   <h1>
      Password generata : ${password}
   </h1>

   <p>
      Lunghezza password : ${password.length}
   </p>
   
`;


console.log(firstname);
console.log(surname);
console.log(prefColor);








