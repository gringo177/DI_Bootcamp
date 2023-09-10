// app.js
import people from './data';

function calculateAverageAge(peopleArray) {
    const totalAge = peopleArray.reduce((sum, person) => sum + person.age, 0);
    return totalAge / peopleArray.length;
}

const averageAge = calculateAverageAge(people);
console.log(`Average Age: ${averageAge}`);
