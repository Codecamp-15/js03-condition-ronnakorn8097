let input_Number = prompt("Enter you Number");


// let num = prompt('Enter number 1');
// Input : null, '', '           ', "qseqwd" , "12"
// null === null [ok]
// '', '        ', => str.trim() == ''
// "qwerqwre" => isNaN

// console.log(num);

// IF-ELSE

// Guard-Clause
// null || '       ' || "asdadada"
// if (num === null || num.trim() === '' || isNaN(num)) {
//     alert('Invalid Number');
// } else if (+num > 0) {
//     alert('Positive Number');
// } else if (+num == 0) {
//     alert('Zero');
// } else if (+num < 0) { 
//     // + จะใส่ไม่ใส่ก็ได้
//     alert('Negative Number');
// }

// null || '       ' || "asdadada"
// if (num.trim() === '' || num === null || isNaN(num)) {
//     alert('Invalid Number');
// }



if (input_Number > 0)
{
    alert("Positive Number");
}

else if (input_Number == 0 && input_Number != "")
 {
 alert("Zero");
}

else if (input_Number < 0)
{
    alert("Negative Number");
}

else {
    alert("Invalid Number");
}

///////////////////////////////////////////////

