// var btc = document.getElementById("Bitcoin_price")

// var liveprice = {
//     "async": true,
//     "scroosDomain": true,
//     "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=NGN",
//     "methods": "GET",
//     "headers" : {},
// }

// $.ajax(liveprice).done(function(response){
//     btc.innerHTML = response.bitcoin.NGN;
// });

fetch('https://api.coinbase.com/v2/prices/BTC-NGN/spot')
  .then(response => response.json())
  .then(data => {
    document.getElementById("Bitcoin_price").innerHTML = data.data.amount
  })
  .catch(error => {
    console.error(error);
  });

  fetch('https://api.coinbase.com/v2/prices/ETH-NGN/spot')
  .then(response => response.json())
  .then(data => {
    document.getElementById("eth_price").innerHTML = data.data.amount
  })
  .catch(error => {
    console.error(error);
  });

  fetch('https://api.coinbase.com/v2/prices/ADA-NGN/spot')
  .then(response => response.json())
  .then(data => {
    document.getElementById("ada_price").innerHTML = data.data.amount
  })
  .catch(error => {
    console.error(error);
  });

  fetch('https://api.coinbase.com/v2/prices/SOL-NGN/spot')
  .then(response => response.json())
  .then(data => {
    document.getElementById("sol_price").innerHTML = data.data.amount
  })
  .catch(error => {
    console.error(error);
  });


