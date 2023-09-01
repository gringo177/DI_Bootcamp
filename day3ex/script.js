// Exercise 1
// function funcOne() {
//     let a = 5;
//     if (a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne(); // Output: "inside the funcOne function 3"
// The value of 'a' is initially 5, but since the condition is true, 'a' is updated to 3 inside the if block.

// #1.2 What will happen if the variable is declared with const instead of let?
// It will result in a syntax error since you can't reassign a constant variable within the if block.

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree(); // Output: "inside the funcThree function 0"
// funcTwo();
// funcThree(); // Output: "inside the funcThree function 5"
// The variable 'a' is declared in the outer scope and is modified by both funcTwo() and funcThree().

// #2.2 What will happen if the variable is declared with const instead of let?
// It will still allow modification, as 'a' is modified by assigning a new value, and const applies to variable reassignment, not value modification.

//#3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour();
// funcFive(); // Output: "inside the funcFive function hello"
// // The variable 'a' is assigned a global property using window, making it accessible in both functions.

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// #4.1 - run in the console:
// funcSix(); // Output: "inside the funcSix function test"
// The variable 'a' inside funcSix() has local scope and doesn't affect the outer 'a'.

// #4.2 What will happen if the variable is declared with const instead of let?
// It will work the same way since the scope and reassignment behavior remain unchanged.

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);
// Output: "in the if block 5", "outside of the if block 2"
// The 'a' inside the if block has local scope and doesn't affect the outer 'a'.

// #5.1 - run the code in the console
// Output: "in the if block 5", "outside of the if block 2"
// The same result as before.

// #5.2 What will happen if the variable is declared with const instead of let?
// It will work the same way since the 'a' inside the if block still has local scope and const applies to reassignment.

// Exercise 2

const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints); 

// Exercise 3
const isString = value => typeof value === 'string';
console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0])); 

// Exercise 4
const sum = (a, b) => a + b;
console.log(sum(3, 5)); 

// Exercise 5

function kgToGramsDeclaration(weightInKg) {
    return weightInKg * 1000;
}
console.log(kgToGramsDeclaration(2)); 


const kgToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
};
console.log(kgToGramsExpression(2)); 


const kgToGramsArrow = weightInKg => weightInKg * 1000;
console.log(kgToGramsArrow(2)); 

// Exercise 6
(function (children, partner, location, job) {
    const fortuneDiv = document.getElementById('fortune');
    fortuneDiv.textContent = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
  })(3, 'Jane', 'New York', 'Web Developer');
  
//   Exercise 7
(function (userName) {
    const userProfileDiv = document.getElementById('user-profile');
    userProfileDiv.innerHTML = `
      <p>Welcome, ${userName}!</p>
      <img src="profile-picture.jpg" alt="${userName}'s Profile Picture">
    `;
  })('John');

//   Exercise 8

function makeJuice(size) {
    const ingredients = [];
  
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      ingredients.push(ingredient1, ingredient2, ingredient3);
    }
  
    function displayJuice() {
      const juiceDiv = document.getElementById('juice');
      juiceDiv.textContent = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    }
  

    addIngredients('Apple', 'Carrot', 'Orange');
    addIngredients('Lemon', 'Lime', 'Ginger');
  
    
    displayJuice();
  }
  
  
  makeJuice('large');
  