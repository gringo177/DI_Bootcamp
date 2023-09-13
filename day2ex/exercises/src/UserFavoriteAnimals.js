import React from 'react';

class UserFavoriteAnimals extends React.Component {
  render() {
    
    const animalItems = this.props.favAnimals.map((animal, index) => (
      <li key={index}>{animal}</li>
    ));

    return (
      <div>
        <h4>Favorite Animals:</h4>
        <ul>{animalItems}</ul>
      </div>
    );
  }
}

export default UserFavoriteAnimals;
