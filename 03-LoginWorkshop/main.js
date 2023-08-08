let user = prompt("Enter Your Name");

if (user === null || user.trim() === "") 
{
  user = "guest";
  alert("Welcome " + user);
} 
else if (user === "codecamp") 
{
  let user_password = prompt("Enter your Password");
  if (user_password === "123456") 
  {
    user = "codecamp";
    alert("Welcome " + user);
  } 
  else {
    alert("Wrong password");

  }
} 
else {
  user = "guest";
  alert("Welcome " + user);
}


