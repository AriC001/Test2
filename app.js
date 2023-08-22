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
      Email.send({
            SecureToken : "9f000ead-c1a3-4f50-b67e-4957363f3f96",
            To : 'ensenadas-voces.0l@icloud.com',
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
