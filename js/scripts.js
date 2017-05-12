//////////////////////////////BUSINESS LOGIC
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
    currentCost = currentCost;
  }
  //toppings cost calculation
  if(toppings === undefined){
    finalCost = currentCost;
  }
  else{
    var toppingsCost = 0;
    for(var i=0; i<toppings.length; i++){
      toppingsCost += toppings[i];
    }
    finalCost = currentCost + toppingsCost;
  }
  return finalCost;
};

//Title Case Conversion
function toTitleCase(string){
  return string.replace(/\w\S*/g, function(text){
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  });
};



//////////////////////////////USER INTERFACE LOGIC
$(document).ready(function(){
  $("#pizzaOrder").submit(function(event){
    event.preventDefault();

    //remove duplication
    $("#crustOut").empty();
    $("#toppingsOut").empty();
    $("#sizeOut").empty();
    $("#pizzaCostOut").empty();
    $("#clientNameOut").empty();
    $("#dynamicPizza").empty();

    //receive input
    var size = $("input:radio[name=size]:checked").val();
    var crust = $("input:radio[name=crust]:checked").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var selectedToppings = parseInt($(this).val());
      toppings.push(selectedToppings);
      //output
      $("#toppingsOut").append('<li>' + toTitleCase($(this).attr('alt')) + ' at $' + parseInt($(this).val()) + '</li>');
      //changing background images based on toppings
      $("#dynamicPizza").append('<div class="' + $(this).attr('alt') + '"></div>');
    });
    var clientName = $("#clientName").val();
    var newPizza = new pizza(crust, toppings, size);

    //output
    $("#output").show();
    $("#clientNameOut").append(", " + toTitleCase(clientName) + ", ");
    $("#crustOut").append(toTitleCase(crust) + " at $" + newPizza.costOf(crust));
    $("#sizeOut").append(toTitleCase(size) + " at $" + newPizza.costOf(size));
    $("#pizzaCostOut").append(newPizza.costOf(crust, toppings, size));
  });
});
