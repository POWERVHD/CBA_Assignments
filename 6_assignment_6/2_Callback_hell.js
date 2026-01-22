function loginUser(callback) {
  setTimeout(() => {
    callback("User logged in");
  }, 1000);
}

function fetchProfile(callback) {
  setTimeout(() => {
    callback("User profile fetched");
  }, 1000);
}

function fetchOrders(callback) {
  setTimeout(() => {
    callback("User orders fetched");
  }, 1000);
}

// Callback Hell
loginUser(function (loginMsg) {
  console.log(loginMsg);

  fetchProfile(function (profileMsg) {
    console.log(profileMsg);

    fetchOrders(function (ordersMsg) {
      console.log(ordersMsg);
    });
  });
});
