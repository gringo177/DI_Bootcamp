//Exercise 1
// const people = ["Greg", "Mary", "Devon", "James"];
// people.shift();
// people.splice(3, 1, "Jason");
// people.push("mikhael")
// console.log(people.indexOf("Mary"));
// const peopleCopy = people.slice();
// console.log(peopleCopy);
// console.log(people.indexOf("Foo"));
// const lastIndex = people.length - 1;
// const last = people[lastIndex];
// console.log(last); 
// for (const i in people) {
//     console.log(i); 
//     console.log(people[i]) 
//  }
// for (let i = 0; i < people.length; i++) {
//     if (people[i] === "Devon") {
//         console.log("Devon");
//         break; 
//     }
// }
//Exercise 2
// const colors = ["fiolent", "blue", "red", "green", "yellow"];
// for (let i = 0; i < colors.length; i++){
//     console.log("My #" + (i + 1) + "choise is " + colors[i]);
// }
// Exercise 3
// let number = parseFloat(prompt("Enter a number:"));

// while (isNaN(number) || number < 10) {
//   number = parseFloat(prompt("Enter a number greater than or equal to 10:"));
// }

// console.log("Number:", number);

// Exercise 4
// const building = {
//   numberOfFloors: 4,
//   numberOfAptByFloor: {
//       firstFloor: 3,
//       secondFloor: 4,
//       thirdFloor: 9,
//       fourthFloor: 2,
//   },
//   nameOfTenants: ["Sarah", "Dan", "David"],
//   numberOfRoomsAndRent:  {
//       sarah: [3, 990],
//       dan:  [4, 1000],
//       david: [1, 500],
//   },
// };

// console.log("Number of Floors:", building.numberOfFloors);

// console.log("Apartments on First Floor:", building.numberOfAptByFloor.firstFloor);
// console.log("Apartments on Third Floor:", building.numberOfAptByFloor.thirdFloor);

// const secondTenant = building.nameOfTenants[1];
// const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant][0];
// console.log("Second Tenant:", secondTenant);
// console.log("Number of Rooms for Second Tenant:", secondTenantRooms);

// const sarahRent = building.numberOfRoomsAndRent.sarah[1];
// const davidRent = building.numberOfRoomsAndRent.david[1];
// const danRent = building.numberOfRoomsAndRent.dan[1];

// if (sarahRent + davidRent > danRent) {
//   building.numberOfRoomsAndRent.dan[1] = 1200;
//   console.log("Dan's Rent Increased:", building.numberOfRoomsAndRent.dan[1]);
// } else {
//   console.log("No need to increase Dan's rent.");
// }

// Exercise 5

// const family = {
//   father: "John",
//   mother: "Jane",
//   son: "Sam",
//   daughter: "Emma"
// };


// console.log("Keys of the family object:");
// for (let key in family) {
//   console.log(key);
// }

// console.log("\nValues of the family object:");
// for (let key in family) {
//   console.log(family[key]);
// }

// Exercise 6
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// };

// let result = "";

// for (let key in details) {
//   result += details[key] + " ";
// }

// console.log(result.trim()); 

// Exercise 7

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// const secretSocietyName = names
//     .map(name => name[0]) 
//     .sort() 
//     .join(""); 

// console.log(secretSocietyName); 
