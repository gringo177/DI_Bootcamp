import React from 'react';

function FormComponent({ data, handleChange }) {
  return (
    <form>
      <input
        type="text"
        name="firstName"
        value={data.firstName}
        placeholder="First Name"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        value={data.lastName}
        placeholder="Last Name"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="age"
        value={data.age}
        placeholder="Age"
        onChange={handleChange}
      />
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={data.gender === 'male'}
          onChange={handleChange}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={data.gender === 'female'}
          onChange={handleChange}
        />
        Female
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="destination"
          value="Japan"
          checked={data.destination === 'Japan'}
          onChange={handleChange}
        />
        Japan
      </label>
      <label>
        <input
          type="checkbox"
          name="destination"
          value="USA"
          checked={data.destination === 'USA'}
          onChange={handleChange}
        />
        USA
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="destination"
          value="Europe"
          checked={data.destination === 'Europe'}
          onChange={handleChange}
        />
        Europe
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
