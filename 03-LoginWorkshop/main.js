let user = prompt("Enter Your Name");

if(user === "" || user === null)
{
    user = "guest";
}
else if(user === "codecamp")
{
    let user_password = prompt("Enter your Password");

    if(user_password === "123456")
    {
        user = "codecamp";
    }
    else{alert("Wrong password");}

}
else 
{
    user = "Guest";
}

alert("Welcome " + user);