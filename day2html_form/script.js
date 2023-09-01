let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let lastname = document.getElementById("lastname");

  if (username.value == "" || lastname.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and lastname of ${lastname.value}`
    );

    // const data = new FormData(loginForm);
    // const value = Object.fromEntries(data);
    // console.log(value);

    username.value = "";
    lastname.value = "";
  }
});

// function handleSubmit(event) {
//     event.preventDefault();

//     const data = new FormData(event.target);

//    const value = Object.fromEntries(data.entries());

//     console.log({ value });
//   }

//   const form = document.querySelector('form');
//   form.addEventListener('submit', handleSubmit);