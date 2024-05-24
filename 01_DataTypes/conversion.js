

let n1 = 33;
let s1 = String(n1);
let b1 = Boolean(n1);

console.log(n1, s1, b1);
console.log(typeof(n1), typeof(s1), typeof(b1));


let s2 = "33ab";
let n2 = Number(s2);
let b2 = Boolean(s2);

console.log(n2, s2, b2);        // NaN 33ab true
console.log(typeof(n2), typeof(s2), typeof(b2));

let s3 = "";
let n3 = Number(s3);
let b3 = Boolean(s3);

console.log(n3, s3, b3);        // 0  false
console.log(typeof(n3), typeof(s3), typeof(b3));

let s4 = "0.8228";
let n4 = Number(s4);
console.log(n4, s4);            // 0.8228 0.8228
console.log(typeof(n4), typeof(s4));    // number string




let v1 = 10;
let v2 = -v1;

console.log(v1, v2);

// string and number addition   :    
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log(1 + 2);

console.log("1" + "2" + 3);
console.log("1" + "2 " + 3);

console.log("1" + 2 + 2);
console.log(1 + 2 + "3");

console.log(+true);         // 1 : boolean to num
// console.log(true+);      ERROR
console.log(true + 2);      // 3
console.log(+"");           // 0: empty string to num 


let num1 = num2 = num3 = 4;
console.log(num1, num2, num3);







