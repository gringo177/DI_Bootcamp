// Exercise 1

// const h1Element = document.querySelector('h1');
// console.log(h1Element.textContent);

// const article = document.querySelector('article');
// const paragraphs = article.querySelectorAll('p');
// const lastParagraph = paragraphs[paragraphs.length - 1];
// article.removeChild(lastParagraph);

// const h2Element = document.querySelector('h2');
// h2Element.addEventListener('click', function() {
//     h2Element.style.backgroundColor = 'red';
// });

// const h3Element = document.querySelector('h3');
// h3Element.addEventListener('click', function() {
//     h3Element.style.display = 'none';
// });

// const boldButton = document.getElementById('boldButton');
// const allParagraphs = document.querySelectorAll('p');
// boldButton.addEventListener('click', function() {
//     allParagraphs.forEach(paragraph => {
//         paragraph.style.fontWeight = 'bold';
//     });
// });

// Exercise 2


// const userForm = document.getElementById('userForm');
// console.log(userForm);

// const fnameInput = document.getElementById('fname');
// const lnameInput = document.getElementById('lname');
// console.log(fnameInput);
// console.log(lnameInput);

// userForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const firstName = fnameInput.value.trim();
//     const lastName = lnameInput.value.trim();

//     if (firstName !== '' && lastName !== '') {
//         const usersAnswerList = document.querySelector('.usersAnswer');

//         const firstNameListItem = document.createElement('li');
//         firstNameListItem.textContent = firstName;

//         const lastNameListItem = document.createElement('li');
//         lastNameListItem.textContent = lastName;

//         usersAnswerList.appendChild(firstNameListItem);
//         usersAnswerList.appendChild(lastNameListItem);

//         fnameInput.value = '';
//         lnameInput.value = '';
//     }
// });

// Exercise 3
// let allBoldItems;

// function getBoldItems() {
//     allBoldItems = document.querySelectorAll('strong');
// }

// function highlight() {
//     allBoldItems.forEach(item => {
//         item.style.color = 'blue';
//     });
// }

// function returnItemsToDefault() {
//     allBoldItems.forEach(item => {
//         item.style.color = 'black';
//     });
// }

// const paragraph = document.querySelector('p');

// paragraph.addEventListener('mouseover', function() {
//     getBoldItems();
//     highlight();
// });

// paragraph.addEventListener('mouseout', function() {
//     returnItemsToDefault();
// });

// Exercise 4
// document.getElementById("MyForm").addEventListener("submit", function(event) {
//     event.preventDefault(); 

//     const radius = parseFloat(document.getElementById("radius").value);
//     const volumeInput = document.getElementById("volume");

//     if (!isNaN(radius) && radius >= 0) {
//         const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
//         volumeInput.value = volume.toFixed(2);
//     } else {
//         volumeInput.value = "Invalid input";
//     }
// });

// Exercise 5

// const boxElement = document.querySelector('.box');

// boxElement.addEventListener('click', function() {
//     boxElement.style.left = Math.random() * window.innerWidth + 'px';
//     boxElement.style.top = Math.random() * window.innerHeight + 'px';
// });

// boxElement.addEventListener('mouseover', function() {
//     boxElement.style.backgroundColor = 'lightgreen';
// });

// boxElement.addEventListener('mouseout', function() {
//     boxElement.style.backgroundColor = 'lightblue';
// });

// boxElement.addEventListener('dblclick', function() {
//     const fontSize = parseInt(getComputedStyle(boxElement).fontSize);
//     boxElement.style.fontSize = fontSize + 5 + 'px';
// });

