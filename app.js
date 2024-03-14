const formWork = document.querySelector(".form_section2");
const fileAdd = document.querySelector("#cvFiles");


function sendEmail(name){
  event.preventDefault();
  alert("Muchas Gracias")
  location.reload()
}

let fileHandler = function(e){ 
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
      console.log(reader.result);
      // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
      try {
      Email.send({
            SecureToken : "10a1f2e8-7cb9-412e-9a00-0dc84a0cb037",
            To : 'aricohen98@gmail.com',
            From : "ensenadas-voces.0l@icloud.com",
            Subject : "Photo form ",
            Body : 'a',
          Attachments : [
          {
            name : file.name,
            data: reader.result,
          }]
          }).then(
          message => console.log(message)
          );
    } catch (error) {
      console.error('Error:', error);
      alert("Ocurrió un error al procesar tu solicitud.");
      }
  };
  reader.readAsDataURL(file);
}
