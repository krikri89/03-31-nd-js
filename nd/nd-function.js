/*Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.*/

function suma(a, b) {
  return a + b;
}
let s1 = suma(2, 3);
console.log(`suma =`, s1);
let s11 = suma(-22, 3);
console.log(`suma =`, s11);
let s111 = suma(2, -33);
console.log(`suma =`, s111);

/*Parašyti funkciją, kuri priima du kintamuosius.Palygina tuos du skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.*/
console.log("--2---------------------------------");

function palyginimas(a, b) {
  if (a > b) {
    console.log(a, `yra daugiau uz`, b);
  } else if (a < b) {
    console.log(a, `yra maziau uz`, b);
  } else console.log(`skaiciai yra lygus`);
}
palyginimas(3, 4);
palyginimas(5, 4);
palyginimas(3, 3);

/*Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.*/

console.log("---3-------------------");

function metai(a) {
  if (a % 4 === 0) {
    console.log(a, `metai yra keliamieji`);
  } else console.log(a, "metai yra nekeliamieji");
}
metai(2000);

metai(2022);

/*Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.*/
console.log("----4---------------");

const kvadratas = (a) => a * a;

const r2 = kvadratas(7);
console.log(r2);

/*Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.*/
console.log("----5------------------");

function suma9(m) {
  let total = 0;

  for (let i = 1; i <= m; i++) {
    total += i;
  }
  return total;
}
console.log(suma9(5), `-->`, 15);

/*Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).*/
console.log("---6----------------");

function skaiciusx(a) {
  for (i = 2; i < a; i++) {
    if (a % i === 0) {
      console.log(i);
    }
  }
}
skaiciusx(14);

/*Parašyti funkciją, kuri priimtų vieną kintamąjį-tekstą. Funkcija turi išvesti tekstą į ekraną ir dar papildomai parodyti jo ilgį(simbolių kiekį).*/
console.log("---7---------------------");

function textas(t) {
  const b = t.length;
  for (let i = 0; i < t.length; i++);
  return `Zodis ${t} turi ${b} raides`;
}
console.log(textas("dede"));

/*Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį–masyvą su 10 skaičių jame.Funkcija turi grąžinti telefono numerį tokiu formatu -"(XXX) XXX-XXXX".*/
console.log("----8-----------------");

function numSize(num) {
  if (typeof num !== `object`) {
    return `error`;
  }
  const stringNum = "" + num;

  if (stringNum.length < 10) {
    return `Number missing`;
  }
  // if (stringNum.length > 10 ) {
  //   return `Too many numbers`
  // }
  if (num < 0) {
    return `Number cannot be negative`;
  }
  for (let i = 0; i < stringNum.length; i++) {
    const number = num[i];
  }
  return stringNum;
}

console.log(numSize([4, 6, 3, 9, 1, 4, 5, 8, 9, 5]));
// console.log(numSize([2,4,5]));
// console.log(numSize([409999999998374974]));
// console.log(numSize([-983749748]));

console.log("----9------------------s");
/*Parašyti funkciją, kuri priimtų du kintamuosius-tekstus.Palyginti kuris tekstas yra ilgesnis.*/

function palyginimas2(text1, text2) {
  if (typeof text1 !== "string" || typeof text2 !== "string") {
    return `Sorry, cannot proceed`;
  }

  if (text1.length > text2.length) {
    return `first text is longer`;
  }
  if (text1.length < text2.length) {
    return `Second text is longer`;
  }
  if ((text1.length = text2.length)) {
    return `Both texts are equal`;
  }
}
// console.log(palyginimas2('juoda kava be cukraus', 'juoda kava su pienu ir cukrum'));
console.log(palyginimas2("juodas", "kava"));
console.log(palyginimas2(29999, "kava"));
console.log(palyginimas2([29999], "kava"));

console.log("------10------------------");
/*Parašyti funkciją, kuri priimtų vieną kintamąjį-tekstą.Suskaičiuoti, kiek tekste yra ‚a‘ raidžių.*/

function aRaides(tekstas) {
  if (typeof tekstas !== "string") {
    return `this is not a text`;
  }
  if (tekstas === "") {
    return `please fill in the gap`;
  }

  let raideA = 0;

  if (tekstas) {
    for (let i = 0; i < tekstas.length; i++) {
      if (tekstas[i] === 'a'){
        raideA++;
      }
    }
  }

  return raideA;
}
console.log(aRaides(12));
console.log(aRaides(`saule`));
console.log(aRaides('barakas'));
