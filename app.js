
let Add;

async function get(){
    event.preventDefault();
    const nombre = document.querySelector('#nombre').value
    const response = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_RnctMsOMzeO7C8UU1BPrIdrcLjBXW')
    .then(response => Add = response.json())
    .then(data => Add = data)
    console.log(Add);
    Email.send({
    SecureToken : "d5e5614a-c92d-4997-8b9a-6e3e522acfcd",
    To : 'aricohen98@gmail.com',
    From : "formulario@verdegestion.com",
    Subject : nombre,
    Body : Add,
  }).then(
  message => console.log(message)
  );
}


































// .then(response => console.log(response))
        // .then(response => ipAdd = response.ip)
    // fetch('https://api.ipify.org/?format=json/')
        // .then(results => results.json)

// Email.send({
//     SecureToken : "d5e5614a-c92d-4997-8b9a-6e3e522acfcd",
//     To : 'aricohen98@gmail.com',
//     From : "aricohen98@gmail.com",
//     Subject : "Respuesta Formulario "+ nombre,
//     Body : ipAdd,
//   }).then(
//   message => console.log(message)
//   );