fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load data");
    }
    return response.json();
  })
  .then(users => {
    users.forEach(user => console.log(user.name));
  })
  .catch(error => console.log(error.message));
