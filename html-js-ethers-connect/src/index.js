const axios = require('axios'); // Using axios as an example

// Example: Make a request with axios
// axios.getAdapter('https://api.example.com/data')
//     .then(response => console.log(response.data))
//     .catch(error => console.error(error));

// Add your basic JavaScript code here
async function connect() {
    if (typeof window.ethereum !== "undefined") {
        ethereum.request({method: "eth_requestAccounts"})
    }
}
  
// Call the function
connect();
  
// Example usage of axios (if you've installed it)
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      console.log('API Response:', response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });