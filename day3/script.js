
// Exercise 2

const btn = document.querySelector("#btn");
btn.addEventListener("click", getData)

function getData () {
    fetch("https://api.giphy.com/v1/gifs/search?offset=2&limit=10&q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    .then((response) => {
        if (!response.ok) {
            throw new Error("problem with fetch")
        } else {
            return response.json()
            //method retrieve the data and parses it
        }
    })
    .then((data) => {
        console.log(data);

        // const ulElement = document.querySelector("#results")
        // data.forEach(user => {
        //     const liElement = document.createElement("li");
        //     const text = document.createTextNode(`${user["name"]} - ${user["email"]}`);
        //     liElement.appendChild(text);
        //     ulElement.appendChild(liElement)
        // });
    })
    .catch((error) => console.log("IN THE CATCH", error))
}

// Exercise 3

async function fetchStarshipData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  fetchStarshipData();

//   Exercise 4

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// OUTPUT
calling
resolved
