async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // console.log(response);

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("FINISH");
  }
}

getAllUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));
