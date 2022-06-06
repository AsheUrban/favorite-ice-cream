$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    const secret = $("input#secret").val();

      const words = secret.split(" ");
      const shortWords = words.filter(word => word.length > 3);
      const wordsShort = shortWords.reverse();


    
      alert(wordsShort.join());

  });
});