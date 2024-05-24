"use strict";

// Date objects represent a single moment in time in a platform-independent format.
let d1 = new Date();
/*
console.log(typeof d1); // object

console.log(d1); // 2024-03-03T14:21:00.838Z
console.log(d1.toString()); // Sun Mar 03 2024 19:51:00 GMT+0530 (India Standard Time)
console.log(d1.toISOString()); // 2024-03-03T14:21:00.838Z
console.log(d1.toJSON()); // 2024-03-03T14:21:00.838Z
console.log(d1.toDateString()); // Sun Mar 03 2024
console.log(d1.toLocaleString()); // 03/03/2024, 19:51:00
console.log(d1.toLocaleDateString()); // 03/03/2024
console.log(d1.toTimeString()); // 19:51:00 GMT+0530 (India Standard Time)


// constructor: new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
let d2 = new Date(22, 8, 2001); // wrong format shows unexpected result
// console.log(d2.toString()); // Wed Feb 22 1928 00:00:00 GMT+0530 (India Standard Time)

let d3 = new Date(2001, 8, 22);
// console.log(d3.toString()); // Sat Sep 22 2001 00:00:00 GMT+0530 (India Standard Time)

// in date formating jan starts from 1, unlike array indexing
let d4 = new Date("2001-09-22");
console.log(d4.toLocaleString()); // 22/09/2001, 05:30:00
*/
let d5 = new Date("2001-09-22"); // YY/MM/DD format
console.log(d5.toLocaleString()); // 22/09/2001, 05:30:00

console.log(Date("22-09-2001").toLocaleString()); // 22/09/2001, 05:30:00    -- unexpected result

// ===============================================================
// time stamp

let myTimeStamp = Date.now(); // returns the number of milliseconds elapsed since the midnight at the beginning of January 1, 1970, UTC
console.log(typeof myTimeStamp); // Number
console.log(myTimeStamp); // 1709478440931

console.log(d5.getTime()); // 1001116800000  - from January 1, 1970 to 22 sep 2001
console.log(d5.getTime()); // 1001116800000  - from January 1, 1970 to 22 sep 2001
// convert the millisec duration into second
console.log(Math.floor(d5.getTime() / 1000)); // 1001116800  - from January 1, 1970 to 22 sep 2001 in seconds

// show the month, date, day etc
console.log(d1.getMonth() + 1); // jan is 0 so march is 2, to make it user understandable +1 to make march 3

//  =====  customize your format =====
d1.toLocaleString("defalut", {
  weekday: "narrow",
});
console.log(d1);
