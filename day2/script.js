// Exercise 1

// function compareToTen(num) {
//     return new Promise ((resolve, reject) => {        
//             if (num <= 10) {
//                 // console.log("resolve")
//                 resolve(num)
//             } else {
//                 // console.log("reject")
//                 reject("bad number")
//             }
//         },  
//     )
// }


// // In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


//   Exercise 2
let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("success"); }, 4000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });

// //   Exercise 3

const resolvedPromise = Promise.resolve(3);

resolvedPromise.then((value) => {
  console.log('Resolved:', value); // Output: Resolved: 3
});

  
const rejectedPromise = Promise.reject('Boo!');

rejectedPromise.catch((error) => {
  console.error('Rejected:', error); // Output: Rejected: Boo!
});
