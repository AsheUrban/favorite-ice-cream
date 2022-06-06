$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    const item1 = $("input#item1").val();
    const item2 = $("input#item2").val();
    const item3 = $("input#item3").val();
    const item4 = $("input#item4").val();

    const groceries = [item1, item2, item3, item4];
    let groceriesFinal = [];
    groceries.sort();
    groceries.forEach(function(item) {
      groceriesFinal.push(capitalize(item));
    })
    console.log(groceriesFinal);

   function capitalize(word) {
   let str;
   str = word.charAt(0).toUpperCase();
   str += word.slice(1);
   console.log(str)
   return str
   };
    })
});
