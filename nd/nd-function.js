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
console.log('---7---------------------');

function textas (t) {
const b = t.length;
for (let i=0; i<t.length; i++);
  return `Zodis ${t} turi ${b} raides`;
} 
console.log(textas('dede'));

/*Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį–masyvą su 10 skaičių jame.Funkcija turi grąžinti telefono numerį tokiu formatu -"(XXX) XXX-XXXX".*/
console.log('----8-----------------');
let numeris = [8, 6, 3, 9, 1, 4, 5, 8, 9];
function tel(n) {
}
console.log(numeris);
