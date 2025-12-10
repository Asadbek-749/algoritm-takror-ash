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
let narx1kg = narx / 1;

for (let i = 1; i <= kg; i = i + 0.2) {
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

// WTHILE 
// 16-masala
let L = 10;
let p1 = 25;
let sumL = L;
let kun = 0;

while (sumL < 200) {
  kun++;
  sumL *= 1 + p1 / 100;
}
console.log(kun + " kunda", parseInt(sumL), " km masofa bosadi");

// 17-masala
let N = 20;
let M = 3;
let B17 = 0;
while (M <= N) {
  N = N - M;
  B17++;
}
console.log("Butun qismi", B, "Qoldiq:", N);

// 18-masala
let N1 = 125;
let or = 0;
let teskariN1 = 0;

while (N1 > 0) {
  or = N1 % 10;
  N1 = parseInt(N1 / 10);
  teskariN1 = teskariN1 * 10 + or;
}
console.log("N ning teskarisi:", teskariN1);

// 19-masala
let N2 = 25780;
let or1 = 0;
let sumN2 = 0;

while (N2 > 0) {
  or1 = N2 % 10;
  sumN2 = sumN2 + or1;
  N2 = parseInt(N2 / 10);
}
console.log("N ning raqamlar yig'indisi:", sumN2);

// 20-masala,
let n20 = 2223;
let ikkiBormi = false;

while (n20 > 0) {
  console.log(n20 % 10);

  if (n20 % 10 === 2) {
    ikkiBormi = true;
  }

  n20 = parseInt(n20 / 10);
}

if (ikkiBormi === true) {
  console.log("Ikki bor");
} else {
  console.log("Ikki yo'q");
}

// 21-masala
let Nson2 = 235478;
let toqBormi = false;

while (Nson2 > 0) {
  console.log(Nson2 % 10);

  if (Nson2 % 2 != 0) {
    toqBormi = true;
  }
  Nson2 = parseInt(Nson2 / 10);
}

if (toqBormi === true) {
  console.log("Toq raqam bor");
} else {
  console.log("Toq raqam yo'q");
}

// 22-masala
let sonT = 7;
let i2 = 2;
let tubSon = true;

while (i2 < sonT) {
  if (sonT % i2 == 0) {
    tubSon = false;
    break;
  }
  i2++;
}

if (tubSon === true) {
  console.log("Tub son");
} else {
  console.log("Tub son emas");
}

// 23-masala
let a23 = 6;
let b23 = 8;

while (b23 != 0) {
  let temp = b23;
  b23 = a23 % b23;
  a23 = temp;
  console.log("Oraliq natija -> a:", a23, "b:", b23);
}

console.log("EKUB:", a23);