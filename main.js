function convertCurrency() {
  const from = document.getElementById("currency-from").value;
  const to = document.getElementById("currency-to").value;
  const amount = document.querySelector(".amount").value;
  const resultDiv = document.querySelector(".convert-result");

  if (from && to && amount) {
    console.log("hi");
    fetch(
      `https://v6.exchangerate-api.com/v6/db13948ddcbb4f3ea0e35085/latest/${from}`,
    )
      .then((resopnse) => resopnse.json())
      .then((data) => {
        const rate = data.conversion_rates[to];
        const result = (amount * rate).toFixed(2);
        resultDiv.innerHTML = `${amount} ${from} = ${result} ${to}`;
      })
      .catch((error) => {
        resultDiv.innerHTML = `Somthing Went wrong ${error}`;
      });
  } else {
    resultDiv.innerHTML = "Please Fill All Fields...!";
  }
}
