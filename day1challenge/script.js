const planetsData = [
    { name: 'Mercury', bgColor: 'gray' },
    { name: 'Venus', bgColor: 'orange' },
    { name: 'Earth', bgColor: 'blue' },
    { name: 'Mars', bgColor: 'red' },
    { name: 'Jupiter', bgColor: 'brown' },
    { name: 'Saturn', bgColor: 'yellow' },
    { name: 'Uranus', bgColor: 'lightblue' },
    { name: 'Neptune', bgColor: 'darkblue' },
  ];
  
  document.addEventListener('DOMContentLoaded', function () {
    const listPlanets = document.querySelector('.listPlanets');
  
    planetsData.forEach(planetData => {
      const planetDiv = document.createElement('div');
      planetDiv.className = 'planet';
      planetDiv.classList.add(planetData.name.toLowerCase()); 
      planetDiv.style.backgroundColor = planetData.bgColor;
  
      listPlanets.appendChild(planetDiv);
    });
  });
  