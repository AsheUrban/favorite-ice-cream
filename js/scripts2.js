$(document).ready(function() {
  $("form#form").submit(function(event) {
    const item1 = $("input#item1");
    const item2 = $("input#item2");
    const item3 = $("input#item3");
    const item4 = $("input#item4");

    const groceries = [item1, item2, item3, item4];
    let groceriesFinal = [];
    groceries.sort();
    groceries.forEach(function(item){
    groceriesFinal.append(item.toUpperCase());
    })
    console.log(groceriesFinal);
  });
});
