//BUSINESS LOGIC
function pizza(crust, toppings, size){
  this.crust = crust;
  this.toppings = toppings;
  this.size = size;
}

pizza.prototype.costOf = function(crust, toppings, size){
  var finalCost = 0;
  var currentCost = 0;
  // debugger;
  //crust cost calculation
  if((crust === "semolina") || (crust === "cornmeal")){
    currentCost += 3;
  }
  else{
    currentCost += 4;
  }
  //size cost calculation
  if(size === "personal"){
    currentCost += 4;
  }
  else if(size === "regular"){
    currentCost += 6;
  }
  else{
    alert("If you'd like to request a new size of pizza please send the management team an email.");
  }
  //toppings cost calculation
  var toppingsCost = 0;
  for(var i=0; i<toppings.length; i++){
    toppingsCost += toppings[i];
  }
  finalCost = currentCost + toppingsCost;
  return finalCost;
};





//USER INTERFACE LOGIC
$(document).ready(function(){
  $("#pizzaOrder").submit(function(event){
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var crust = $("input:radio[name=crust]:checked").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var selectedToppings = parseInt($(this).val());
      toppings.push(selectedToppings);
    });

    var newPizza = new pizza(crust, toppings, size);
    console.log(newPizza.costOf(crust, toppings, size));
  });
});
