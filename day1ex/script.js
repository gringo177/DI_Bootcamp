// Exercise 1
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2
function displayStudentInfo(objUser){
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'})); 

// Exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 };


const userArray = Object.entries(users);


const modifiedUserArray = userArray.map(([user, id]) => [user, id * 2]);

console.log(modifiedUserArray);

// Exercise 4
object

// Exercise 5
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  }

//   Exercise 6

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  class Mammal extends Animal {
    constructor(name, type, color) {
      super(name, type, color);
    }
  
    sound(sound) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color} and ${sound}`;
    }
  }
  
  const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
  console.log(farmerCow.sound('moos'));
  
