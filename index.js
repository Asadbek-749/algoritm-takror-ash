// Integer
// 11-masala
let son = 123;
let birlik = son % 10;
let onlik = parseInt(son / 10) % 10;
let yuzlik = parseInt(son / 100);
console.log("Teskarisi:" + birlik + +onlik + +yuzlik);

// 12-masala
let son2 = 123;
let yuzlik2 = parseInt(son2 / 100);
let left = son % 100;
console.log("Chapdan:" + left + yuzlik2);

// 13-masala
let son3 = 123;
let birlik3 = son % 10;
let right = parseInt(son3 / 10);
console.log("O'ngdan:" + birlik3 + right);

// Boolean
// 1-masala
let A = 12;
let musbatmi = Boolean(A > 0);
console.log("A soni musbat:", musbatmi);

// 2-masala
let A1 = 14;
let toqmi = Boolean(A1 % 2 === 1);
console.log("A soni toq:", toqmi);

// 3-masala
let A2 = 5;
let juftmi = Boolean(A2 % 2 === 0);
console.log("A soni juftmi:", juftmi);

// 4-masala
let A3 = 5;
let B = 4;
let rostmi = Boolean(A3 > 2 && B >= 3);
console.log("Shart rostmi:", rostmi);

// 5-masala
let A4 = 5;
let B1 = 4;
let rostmi1 = Boolean(A4 >= 0 && B1 < -2);
console.log("Shart rostmi:", rostmi1);

// 6-masala
let A6 = 5;
let B6 = 7;
let C6 = 10;

let natija6 = A6 <= B6 && B6 <= C6;
console.log("Jumla rostmi:", natija6);

// 7-masala
let A7 = 5;
let B7 = 7;
let C7 = 10;

let natija7 = (B7 > A7 && B7 < C7) || (B7 < A7 && B7 > C7);
console.log("B soni A va C sonlar orasida yotadi:", natija7);

// 8-masala
let A8 = 7;
let B8 = 9;

let natija8 = A8 % 2 !== 0 && B8 % 2 !== 0;
console.log("A va B sonlari toq sonlar", natija8);

// 9-masala
let A9 = 4;
let B9 = 9;

let natija9 = A9 % 2 !== 0 || B9 % 2 !== 0;
console.log("A va B sonlardan hech bo‘lmaganda bittasi toq son", natija9);

// 10-masala
let A10 = 4;
let B10 = 9;

let natija10 =
  (A10 % 2 !== 0 && B10 % 2 === 0) || (A10 % 2 === 0 && B10 % 2 !== 0);
console.log("A va B sonlardan faqat bittasi toq son", natija10);

// If
// 6-masala
let n = 15;
let m = 20;
if (n > m) {
  console.log("Eng katta son", n);
} else {
  console.log("Eng katta son", m);
}

// 7-masala
let n1 = 15;
let m1 = 5;

if (n1 > m1) {
  console.log("Tartib raqami 2:", m1);
} else if (n1 < m1) {
  console.log("Tartib raqami 1:", n1);
} else {
  console.log("Ikkalasi teng");
}

// 8-masala
let n2 = 30;
let m2 = 25;
if (n2 > m2) {
  console.log("Eng kattasi:", n2);
  console.log("Eng kichigi:", m2);
} else if (m2 > n2) {
  console.log("Eng kattasi:", m2);
  console.log("Eng kichigi:", n2);
} else {
  console.log("Ikkklasi teng");
}

// FOR
// 6-masala
let narx = 35000;
let kg = 2;
let narx1kg = narx / kg;

for (let i = 1; i <= 2; i = i + 0.2) {
  let narxi = narx1kg * i;
  console.log(i.toFixed(1), "kg konfetning narxi:", narxi);
}

// 7-masala
let a = 15;
let b = 35;
let summ = 0;

for (i = a; i <= b; i++) {
  summ += i;
}
console.log("Yig'indisi:", summ);

// 8-masala
let a8 = 15;
let b8 = 35;
let summK = 1;

for (i = a8; i <= b8; i++) {
  summK *= i;
}
console.log("Ko'paytmasi:", BigInt(summK));

// 9-masala
let a9 = 1;
let b9 = 8;
let summKV = 0;

for (i = a9; i <= b9; i++) {
  let kv = i ** 2;
  summKV += kv;
}
console.log("Kvadratining Yig'indisi:", summKV);
