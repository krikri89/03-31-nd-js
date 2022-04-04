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
console.log('----4---------------');


const kvadratas = a => a*a;

const r2 = kvadratas(7);
console.log(r2);

/**/