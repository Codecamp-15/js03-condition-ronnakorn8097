let login = prompt("Enter Username");
let message = login =='Employee' ? 'Hello' : login == 'Director' ? 'Greetings' : login == "" ? 'No Login' : "";

console.log(message);