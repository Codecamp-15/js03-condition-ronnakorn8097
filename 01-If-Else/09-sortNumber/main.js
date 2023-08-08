// v.0 แสดงฌฉพาะตัวที่มากสุด
// v.1 handle เลขที่ไม่เหมือนกัน
// v.2 handle เลขที่เหมือนกันได้

// แปลงเป็น number โดยมี propoties ชื่อ number
let x = Number(prompt("Enter number 1")); 
// แปลงเแป็น number โดยมี +
let y = +prompt("Enter number 2");
// แปลงเป็น number โดยการนำ string ไป * 1
let z = prompt("Enter number 3") * 1;

// case1 : x มาหสุด
// case2 : y มากสุด
// case3 : z มากสุด
// DRY principle : Don 't Repeat yourseft
let max;
let mid;
let min;

if(x > y && x > z)
{
    max = x;
    if( y > z)
    {
        mid = y;
        min = z;
    }
    else
    {
        mid = z;
        min = y;
    }
}
else if (y > x && y > z)
{
    max = y;
    if( x > z)
    {
        mid = x;
        min = z;
    }
    else
    {
        mid = x;
        min = z;
    }

}
else if(z > x && z > y)
{
    max = z;
    if(x>y)
    {
        mid = x;
        min = y;
    }
    else
    {
        mid = y;
        min = x;
    }
}

console.log(`${max} : ${mid} : ${min}`);




// if(x > y && x > z)
// {
//     console.log("MAX = ${x}");
// }
// else if(y > x && y > z)
// {
//     console.log("Max = ${y}");
// }
// else if(z > x && z > y)
// {
//     console.log("Max = ${z}");
// }