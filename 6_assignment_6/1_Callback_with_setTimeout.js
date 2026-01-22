function getUser(callback) {
  setTimeout(() => {
    const user = { id: 1, name: "Ravi" };
    callback(user);
  }, 2000);
}

getUser(function (user) {
  console.log("User name:", user.name);
});
