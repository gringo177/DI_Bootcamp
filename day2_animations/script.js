// Exercise 1

// function showAlert() {
//     alert("Hello World");
// }

// setTimeout(showAlert, 2000);


// function addParagraph() {
//     const container = document.getElementById("container");
//     const newParagraph = document.createElement("p");
//     newParagraph.textContent = "Hello World";
//     container.appendChild(newParagraph);
// }

// setTimeout(addParagraph, 2000);


// let intervalId;
// const container = document.getElementById("container");

// function addParagraph() {
//     const newParagraph = document.createElement("p");
//     newParagraph.textContent = "Hello World";
//     container.appendChild(newParagraph);
    
//     if (container.childElementCount === 5) {
//         clearInterval(intervalId);
//     }
// }

// intervalId = setInterval(addParagraph, 2000);

// const clearButton = document.getElementById("clear");
// clearButton.addEventListener("click", function() {
//     clearInterval(intervalId);
// });

// Exercise 2

// const animateElement = document.getElementById('animate');
// const containerElement = document.getElementById('container');
// const startButton = document.getElementById('startButton');

// let intervalId;
// const containerWidth = containerElement.offsetWidth;
// const animateWidth = animateElement.offsetWidth;

// function moveAnimate() {
//     let currentPosition = 0;
    
//     intervalId = setInterval(function() {
//         currentPosition += 1;
//         animateElement.style.left = currentPosition + 'px';
        
//         if (currentPosition + animateWidth >= containerWidth) {
//             clearInterval(intervalId);
//         }
//     }, 1);
// }

// startButton.addEventListener('click', moveAnimate);
