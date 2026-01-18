function getProducts() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Products loaded"), 2000);
  });
}

function getOrders() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Orders loaded"), 1000);
  });
}

async function loadAll() {
  let products = await getProducts();
  console.log(products);

  let orders = await getOrders();
  console.log(orders);
}

loadAll();
