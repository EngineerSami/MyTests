

function pizzaOven() {
    
    const pizzas = [
        {
            crust: "deep dish",
            sauce: "traditional",
            cheeses: ["mozzarella"],
            toppings: ["pepperoni", "sausage"]
        },
        {
            crust: "hand tossed",
            sauce: "marinara",
            cheeses: ["mozzarella", "feta"],
            toppings: ["mushrooms", "olives", "onions"]
        },
        {
            crust: "thin crust",
            sauce: "pesto",
            cheeses: ["parmesan"],
            toppings: ["spinach", "sun-dried tomatoes"]
        },
        {
            crust: "stuffed crust",
            sauce: "bbq",
            cheeses: ["mozzarella", "cheddar"],
            toppings: ["chicken", "jalapeños"],
        }
    ];

    return pizzas;
}


const myPizzas = pizzaOven();
console.log(myPizzas[3].cheeses[0]);
