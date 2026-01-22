async function loadData() {
  try {
    let result = await dataPromise;
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadData();
