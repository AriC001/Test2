const formWork = document.querySelector(".form_section2");
const fileAdd = document.querySelector("#cvFiles");

let Add;

let fileHandler = function(e){

  let emailCV = "Adjunto CV " + document.getElementById("cv-email").value
 
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
      console.log(reader.result);
      // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
      Email.send({
            SecureToken : "d5e5614a-c92d-4997-8b9a-6e3e522acfcd", 
            To : 'aricohen98@gmail.com',
            From : "formulario@verdegestion.com",
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
}
