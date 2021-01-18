//vhapter 31 34
// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var date = today.getDate();
// document.write("date is " + date + " time is" + " " + time);
// document.write("<br/>")
// if (date <= 15) {
//     document.write("first fiften days of month")
// }
// else {
//     document.write("last fifteen days of month")
// }
// document.write("<br/>")
// if (time >= "12:00:00") {
//     document.write("ITS PM TIME")
// } else {
//     document.write("ITS AM TIME")
// }

// document.write("<br/>")
// document.write("<br/>")

// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";

// var d = new Date();
// var n = month[d.getMonth()];
// document.write("month is " + n);
// document.write("<br/>")
// var lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);
// document.write("last day of this month is " + lastDay)
// document.write("<br/>")


// var day = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var a = weekday[day.getDay()];
// var sli = a.slice(0, 3);
// document.write("today is " + sli);
// document.write("<br/>");
// document.write("<br/>");
// if (sli === "sat" || sli === "sun") {
//     document.write("its fun day");
// }
// else {
//     document.write("its working day");
// }
// document.write("<br/>")

// function khi() {
//     var x = "karachi";
//     document.write("city is " + x);
//     document.write("<br/>");
//     var cpy = x.slice(1);
//     var y = x.charAt(0);
//     var cap = y.toUpperCase();
//     var print = cap + cpy;
//     return print;
// }

// var show = khi()
// document.write("after capitalize :" + show);

// document.write("<br/>")
// document.write("<br/>")
// var date1 = new Date("06/30/2020");
// var date2 = new Date();
// var Difference_In_Time = date2.getTime() - date1.getTime();
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
// var dateprint = Difference_In_Days.toFixed(0);
// document.write("  <br> Ramdan was on </br>" + date1 + "<br> and today's date is <br> " + date2 + " is: <br>  " + dateprint + " days has passed since ramdan")

// var date = +prompt("enter date");
// var month = +prompt("enter month in word");
// var year = +prompt("enter year");
// var print = date + month + "," + year;
// var date = new Date(print);
// var birth = date.getTime()
// var curent = new Date();
// var curnt = curent.getTime()
// var total = curnt - birth;
// var timee = 1000 * 60 * 60 * 24 * 30 * 12;
// var tot = total/timee;
// var flor = Math.floor(tot);
// document.write("your age is "+flor+"<br/>")
// document.write("your birthday year is "+year+"<br/>")

//  function electric() { 

//     var month = new Array();
//     month[0] = "January";
//     month[1] = "February";
//     month[2] = "March";
//     month[3] = "April";
//     month[4] = "May";
//     month[5] = "June";
//     month[6] = "July";
//     month[7] = "August";
//     month[8] = "September";
//     month[9] = "October";
//     month[10] = "November";
//     month[11] = "December";
//     var d = new Date();
//     var n = month[d.getMonth()];

//     let nam = document.getElementById("name").value;
//     let uni = document.getElementById("unit").value;

//     let units = parseFloat(uni)
//     let unts = units.toFixed(2);
//     let x = 16;
//     let price = x.toFixed(2);
//     let amount = units * x;
//     let amnt = amount.toFixed(2);
//     let charge = 1000;
//     let chrg = charge.toFixed(2);
//     let gross = amount + charge;
//     let grs = gross.toFixed(2);
//     document.getElementById("k-name").innerHTML = "Name is :" + nam;
//     document.getElementById("k-mon").innerHTML = "Month is :" + n;
//     document.getElementById("k-unit").innerHTML = "Number of units" + unts;
//     document.getElementById("k-x").innerHTML = "Charges per unit:" + price;
//     document.getElementById("k-amount").innerHTML = "Total Amount is :" + amnt;
//     document.getElementById("k-charge").innerHTML = "Late fee after (Due date):" + chrg;
//     document.getElementById("k-gross").innerHTML = "After due date payment is:" + grs;

// }

//chapter 35 to 38


// function nam(){
//     var first = prompt("Enter First Name");
//     var second = prompt("Enter Second Name");
//     var namee = first+second;
//     return namee;

// }
// var x = nam()
// document.write(x);

// function add() {
//     var x = +prompt("Enter first Value");
//     var y = +prompt("Enter second Value");
//     var z = x + y;
//     return z;
// }
// var pri =  add()
// document.write("addition is "+pri);


// function calculator() {
//     var x = +prompt("enter first value");
//     var y = +prompt("enter second value value");
//     var z = prompt("enter  operator");
//     if (z === "+") {
//         var plus = x + y;
//         return plus
//     } else if (z == "-") {
//         var minus = x - y;
//         return minus;
//     } else if (z == "*") {
//         var minus = x * y;
//         return minus;
//     }
//     else if (z == "/") {
//         var divide = x / y;
//         return divide;
//     }
// }
// var p= calculator();
// document.write(p);



// function factorial(n) {
//     let answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else {
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// let n = 4;
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);

// function counter() {
//     var a = +prompt("enter starting value");
//     var b = +prompt("enter ending value");
//    for (let x = a; x < b; x++) {
//        document.write(x+"<br/>");

//    }
// }
// counter();


// function hypo() {
//     var b = +prompt("enter first value");
//     var p = +prompt("enter Second value");
//     var h = p * b;
//     return h;
// }
// function squa() {
//     var sq = hypo()
//     var square = sq * sq;
//     return square;
// }
// var bb = squa()
// document.write(bb);


// function palindrome() {
//     var str = prompt("enter a name to check palindrome");
//     var len = str.length;
//     var mid = Math.floor(len / 2);

//     for (var i = 0; i < mid; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             document.write("its not palindrome");
//             break;
//         }
//         else{
//             document.write("its palindrome");
//             break;
//         }
//     }
// }
// palindrome()


// function longest(str) {
//     var array = str.match(/\w[a-z]{0,}/gi);
//     var result = array[0];

//     for (var x = 1; x < array.length; x++) {
//         if (result.length < array[x].length) {
//             result = array[x];
//         }
//     }
//     return result;
// }
// document.write(longest('Web Development Tutorial in hindi'));


// function char_count() {
//     str = prompt("enter string");
//     letter = prompt("enter letter that you want to check in the string");
//     var letter_Count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) == letter) {
//             letter_Count += 1;
//         }
//     }
//     return letter_Count;
// }
// var x = char_count()
// document.write(str + "<br/>");
// document.write(letter + " is available " + x + " times " + "in above string");

//chapter 38 to 42

// function leap_year() {
//     var year = +prompt("enter a year");
//     if (year%4===0) {
//         document.write("its a leap year");
//     }
//     else{
//         document.write("its not a leap year");
//     }
// }
// leap_year()



// function tirangle() { this code is not working 
//     var a = +prompt("enter first val");
//     var b = +prompt("enter second val");
//     var c = +prompt("enter third val");
//     S = (a + b + c) / 2;
// }
// function tngle() {
//     tirangle()
//     area1 = S - a;
//     area2 = S - b;
//     area3 = S - c;
//     area = S((area1)(area2)(area3));
// }
// var zz = tngle()
// document.write("tirangle is " + zz);


// function sub() {
//     let eng = document.getElementById("english").value;
//     let math = document.getElementById("math").value;
//     let urdu = document.getElementById("urdu").value;
//     document.getElementById("english").value = "";
//     document.getElementById("math").value = "";
//     document.getElementById("urdu").value = "";
//     document.getElementById("m-english").innerHTML = "English marks:" + eng;
//     document.getElementById("m-math").innerHTML = "Math marks :" + math;
//     document.getElementById("m-urdu").innerHTML = "Urdu marks:" + urdu;
//     var result = parseFloat(eng) + parseFloat(math) + parseFloat(urdu);
//     if (!isNaN(result)) {
//         document.getElementById("res").innerHTML = "Total Marks are:" + result + " Out of 300";
//     }
//     var per = (result / 300) * 100;
//     var centage = per.toFixed(2);
//     if (!isNaN(per)) {
//         document.getElementById("percen").innerHTML = "Your percentage is :" + centage;
//     }
//     if (centage < 50) {
//         document.getElementById("remarks").innerHTML = " REMARKS: You're fail <br/> your grade is F";
//     }
//     else if (centage < 60) {
//         document.getElementById("remarks").innerHTML = " REMARKS: You're just pass <br/> your grade is C";
//     }
//     else if (centage < 70) {
//         document.getElementById("remarks").innerHTML = " REMARKS: You're  pass but need to improve<br/> your grade is B";
//     }

//     else if (centage < 80) {
//         document.getElementById("remarks").innerHTML = " REMARKS: Good you passed with good numbers<br/> your grade is -A";
//     }
//     else {
//         document.getElementById("remarks").innerHTML = " REMARKS:CONGRATULATIONS you passed with flying numbers<br/> your grade is A++";
//     }

// }


// var def = prompt("Enter the string to count two vowels in succetion : ");
// var answer = deleteVowelsS(def);
// alert("The vowels in succetion are " + answer + " times");
// function deleteVowelsS(str) {
//     var k = 0;
//     var spl = str.match(/.{0,2}/g);
//     for (var i = 0; i < spl.length; i++) {
//         if (spl[i] == 'aa' || spl[i] == 'ea' || spl[i] == 'ia' || spl[i] == 'oa' ||
//             spl[i] == 'ua' || spl[i] == 'ae' || spl[i] == 'ee' || spl[i] == 'ie' ||
//             spl[i] == 'oe' || spl[i] == 'ue' || spl[i] == 'ai' || spl[i] == 'ei' ||
//             spl[i] == 'ii' || spl[i] == 'oi' || spl[i] == 'ui' || spl[i] == 'ao' ||
//             spl[i] == 'eo' || spl[i] == 'io' || spl[i] == 'oo' || spl[i] == 'uo' ||
//             spl[i] == 'au' || spl[i] == 'eu' || spl[i] == 'iu' || spl[i] == 'ou' ||
//             spl[i] == 'uu') {
//             k++;
//         }
//     }
//     return k;

// }


// function km() {
//     var x = prompt("enter distance betwen two cities in kilo meter ");
//     var f = prompt("enter distance ");

//     var feet = parseInt(f);
//     var y = parseInt(x);

//     var z = y * 1000;
//     var fee = feet * 3000;
//     var inc = fee* 36000;
//     document.write("distance in meter is " + z + "<br/>");
//     document.write("distance in feet is " + fee + "<br/>");
//     document.write("distance in inch is " + inc + "<br/>");
// }
// km()

// var amount = +prompt("enter amount")
// countCurrency(amount);
// function countCurrency(amount) {
//     var notes = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1];
//     var noteCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//     // count notes using
//     // Greedy approach
//     for (var i = 0; i < 10; i++) {
//         if (amount >= notes[i]) {
//             noteCounter[i] = parseInt(amount / notes[i]);
//             amount = amount - noteCounter[i] * notes[i];
//         }
//     }
//     // Print notes
//     for (var i = 0; i < 10; i++) {
//         if (noteCounter[i] != 0) {
//             document.write("notes of " + notes[i] + " will be" + " : " + noteCounter[i] + "<br/>");
//         }
//     }
// }   