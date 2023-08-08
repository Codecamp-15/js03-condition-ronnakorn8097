let browser = prompt("Enter your Browser");

if (browser === "Edge")
{
    alert("You've got the Edge!");
}
// ที่ใช้ or เพราะ ถ้าเจอ true จะเลือกเลย โดยไม่สนตัวต่อไป
else if(browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera")
{
    alert("Okay we support these browsers too");
}


else {alert("We hope that this page looks ok!");}