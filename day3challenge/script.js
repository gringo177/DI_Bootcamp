let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
  groceries.fruits.forEach(fruit => {
    console.log(fruit);
  });
}

const cloneGroceries = () => {
  let user = client;

  client = "Betty";

  let shopping = Object.assign({}, groceries);


  shopping.totalPrice = "35$";
  shopping.other.paid = false;


  console.log(shopping);


  console.log(`User: ${user}`);
}


displayGroceries();


cloneGroceries();
