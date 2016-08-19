// sanity check
console.log("app.js linked.");

$(document).ready(function(){

  $("#contact-button").on("click", function handleClick(event) {
   window.location.href='mailto:cleo.aliciabrown@gmail.com';
  });

});
