const formWork = document.querySelector(".form_section2");
const fileAdd = document.querySelector("#cvFiles");


function sendEmail(name){
  event.preventDefault();
  alert("Muchas Gracias")
  location.reload()
}

let fileHandler = function(e){

  //let emailCV = "Adjunto CV " + document.getElementById("cv-email").value
 
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
      console.log(reader.result);
      // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
      Email.send({
            SecureToken : "d5e5614a-c92d-4997-8b9a-6e3e522acfcd", 
            To : 'aricohen98@gmail.com',
            From : "formulario@verdegestion.com",
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
  };
  reader.readAsDataURL(file);
}



/* const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
      console.log(reader.result);
      // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
      Email.send({
            SecureToken : "8944c40b-4e8c-4cbf-848d-0c7da4235591", 
            To : 'aricohen98@gmail.com',
            From : "panimagroup.sa@hotmail.com",
            Subject : "CV WEB " + document.getElementById("cv-email").value,
            Body : emailCV,
          Attachments : [
          {
            name : file.name,
            data: reader.result,
          }]
          }).then(
          message => console.log(message)
          );
  };
  reader.readAsDataURL(file);
} */