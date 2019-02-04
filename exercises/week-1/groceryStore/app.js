var shopper = {
    location: "California",
    itemsInCart: 25, 
    creditPay: true,
    thank: function() { 
        console.log("Thank you for shopping in " + shopper.location + " and for purchasing " + 
        shopper.groceryCart.fruit + ", " + shopper.groceryCart.meat + ", and " + shopper.groceryCart.dairy + ".");
    },
    groceryCart: {  
        fruit: "apples", 
        meat: "steak",
        dairy: "milk"
    }
}

shopper.thank();

