
const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
   
  ];
  
  const cardContainer = document.getElementById('card-container');
  const searchInput = document.getElementById('search');
  
  function displayCards(robots) {
    cardContainer.innerHTML = '';
    robots.forEach(robot => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${robot.image}" alt="${robot.name}">
        <h2>${robot.name}</h2>
        <p>Username: ${robot.username}</p>
        <p>Email: ${robot.email}</p>
      `;
      cardContainer.appendChild(card);
    });
  }
  
 
  displayCards(robots);
  
  
  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchText));
    displayCards(filteredRobots);
  });
  