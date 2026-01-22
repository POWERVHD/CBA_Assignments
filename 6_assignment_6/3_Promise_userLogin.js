function loginUser(username) {
  return new Promise((resolve, reject) => {
    if (username === "admin") {
      resolve("Login successful");
    } else {
      reject("Login failed");
    }
  });
}

loginUser("admin")
  .then(result => console.log(result))
  .catch(error => console.log(error));
