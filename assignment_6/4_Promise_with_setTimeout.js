let dataPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data loaded");
  }, 3000);
});

dataPromise.then(message => console.log(message));
