$(document).ready(function() {
  const flavors = ["Vanilla","Chocolate","Coffee","Mint chocolate chip","Rocky road"];
  flavors.forEach(function(flavor) {
    $("#output").append(", " + flavor);
  })
});