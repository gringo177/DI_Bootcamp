//Exercise 1

function displayNumbersDivisible() {
    let sum = 0;
  
    for (let i = 0; i <= 500; i++) {
      if (i % 23 === 0) {
        console.log(i);
        sum += i;
      }
    }
  
    console.log("Sum:", sum);
  }
  
  displayNumbersDivisible();

  //Exercise 2
  const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
  };
  
  const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
  };
  
  const shoppingList = ["banana", "orange", "apple"];
  
  function myBill() {
    let total = 0;
  
    for (let item of shoppingList) {
      if (item in stock && stock[item] > 0) {
        total += prices[item];
        stock[item]--;
      }
    }
  
    return total;
  }
  
  console.log("Total Bill:", myBill());
  

  //Exercise 3

  function changeEnough(itemPrice, amountOfChange) {
    const coins = [0.25, 0.1, 0.05, 0.01];
    let totalChange = 0;
  
    for (let i = 0; i < coins.length; i++) {
      totalChange += coins[i] * amountOfChange[i];
    }
  
    return totalChange >= itemPrice;
  }
  
  console.log(changeEnough(4.25, [25, 20, 5, 0])); 
  console.log(changeEnough(14.11, [2, 100, 0, 0])); 
  console.log(changeEnough(0.75, [0, 0, 20, 5])); 
  
  //Exercise 4

  function hotelCost() {
    let nights = parseInt(prompt("Enter number of nights in hotel:"));
  
    while (isNaN(nights)) {
      nights = parseInt(prompt("Please enter a valid number of nights:"));
    }
  
    return nights * 140;
  }
  
  function planeRideCost() {
    const destination = prompt("Enter your destination:").toLowerCase();
  
    switch (destination) {
      case "london":
        return 183;
      case "paris":
        return 220;
      default:
        return 300;
    }
  }
  
  function rentalCarCost() {
    let days = parseInt(prompt("Enter number of days for rental car:"));
  
    while (isNaN(days)) {
      days = parseInt(prompt("Please enter a valid number of days:"));
    }
  
    let cost = days * 40;
  
    if (days > 10) {
      cost *= 0.95; 
    }
  
    return cost;
  }
  
  function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
  
    const total = hotel + plane + car;
  
    console.log(`Hotel cost: $${hotel}, Plane ticket cost: $${plane}, Car rental cost: $${car}`);
    console.log(`Total vacation cost: $${total}`);
  }
  
  totalVacationCost();
  
  //Exercise 5

  const divElement = document.getElementById('container');

console.log(divElement);

const ulElements = document.querySelectorAll('.list');
ulElements.forEach(ul => {
  ul.querySelector('li:nth-child(2)').textContent = "Richard";
  ul.removeChild(ul.lastElementChild);
  ul.firstElementChild.firstElementChild.textContent = "Your Name";
});

ulElements.forEach(ul => {
  ul.classList.add('student_list');
});

ulElements[0].classList.add('university', 'attendance');

divElement.style.backgroundColor = 'lightblue';
ulElements[0].removeChild(ulElements[0].lastElementChild);
ulElements[0].querySelector('li:last-child').style.border = '1px solid black';
document.body.style.fontSize = '20px';

if (divElement.style.backgroundColor === 'lightblue') {
  alert("Hello x and y");
}

  //Exercise 6

  const divElement = document.getElementById('navBar');
divElement.setAttribute('id', 'socialNetworkNavigation');

const newLi = document.createElement('li');
const newLink = document.createElement('a');
newLink.href = "#";
newLink.textContent = "Logout";
newLi.appendChild(newLink);

const ulElement = divElement.querySelector('ul');
ulElement.appendChild(newLi);

const firstLi = ulElement.firstElementChild;
const lastLi = ulElement.lastElementChild;
console.log(firstLi.firstElementChild.textContent);
console.log(lastLi.firstElementChild.textContent);

  //Exercise 7

  const allBooks = [
  {
    title: "Book One",
    author: "Author One",
    image: "https://example.com/book1.jpg",
    alreadyRead: true
  },
  {
    title: "Book Two",
    author: "Author Two",
    image: "https://example.com/book2.jpg",
    alreadyRead: false
  }
];

const listBooks = document.querySelector('.listBooks');

allBooks.forEach(book => {
  const bookDiv = document.createElement('div');
  const bookImage = document.createElement('img');
  bookImage.src = book.image;
  bookImage.style.width = "100px";

  const bookDetails = document.createElement('p');
  bookDetails.textContent = `${book.title} written by ${book.author}`;
  if (book.alreadyRead) {
    bookDetails.style.color = "red";
  }

  bookDiv.appendChild(bookImage);
  bookDiv.appendChild(bookDetails);

  listBooks.appendChild(bookDiv);
});
