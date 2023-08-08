let username = prompt("Enter Your Username");
let password = prompt("Enter Your Password");

if(username === "" || username === null)
{
    alert("username is required");
}

else if(password === "" || username === null)
{
    alert("password is required");
}
else if(username === "admin" || username === "john" && password === "1234" || password === "qwerty")
{
 alert("Hello " + username);
}
else
{
    alert("invalid username or password");
}