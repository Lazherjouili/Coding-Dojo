function pizzaoven(crustType,sauceType,cheeses,toppings){
    var pizza={}
    pizza.crustType =crustType
    pizza.sauceType =sauceType
    pizza.cheeses =cheeses
    pizza.toppings =toppings
    
return pizza;
}
console.log(pizzaoven("deep dish","traditional",["mozzarella"],["pepperoni", "sausage"]))
console.log(pizzaoven("hand tossed","marinara",["mozzarella", "feta"],["mushrooms", "olives", "onions"]))
console.log(pizzaoven("deep dish","4seasons",["'formamages"],["onions","tomato"]))
console.log(pizzaoven("hand tossed","turc",["'formamages"],["onions","tomato"]))