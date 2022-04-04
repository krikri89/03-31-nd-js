//Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.
for (i = 0; i < 5; i++) {
  console.log("Labas");
}
console.log("2--------------------------");
/*Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje).*/

for (i = 0; i < 5; i++) {
  console.log(i);
}
console.log("3----------------------------");
/*Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje).*/
for (i = 0; i < 50; i+=10) {
  console.log(i);
}
console.log("4----------------------------------");
/*Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje).*/

for (i = 49; i < 54; i++) {
  console.log(i);
}
console.log("5-----------------------------");
/*Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).*/
function rand(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
for (i = 0; i < 5; i++) {
  console.log(rand(0, 10));
}
console.log("6---------------------------------");
/*Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.*/
for (i = 1; i < 20; i ++) {
  if (i%3 !== 0)
  console.log(i);
}
console.log("7----------------------------------");
/*Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.*/
let b = 1;
for (i = 0; i < 11; i+=1) {
  
  let daugyba = i*b;
  console.log(i, `x`, b, `= `, daugyba);
}
console.log("8------------------------------------");
/*Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekranelentelę nuo 1 iki n colius centimetrais.*/

for (i = 1; i < 10; i++) {
  console.log(i, `cm =`, i * 2.54, `Inch`);
}

console.log("9-------------------------------------");
/*Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.*/
let n = 5;
let suma =100;
for (i = 1; i <= 5; i++) {
const palukanos = suma*0.02;
suma += palukanos;
console.log(i, `metu + palukanu €`, palukanos.toFixed(2), `=`, suma.toFixed(2), `€`);
}

console.log('10------------------------------------');
/*Keliamieji metai turi 366 dienas, paprastieji–365. Visi metai, išskyrus šimtmečius, yra keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 –paprastieji. Raskite visus mūsų eros keliamuosius metus.*/
for (i = 1000; i < 2022; i++) {
  if(i%4 === 0 && i%100 !== 0 || i%400 === 0)
  console.log(`Kelemieji metai`, i);
}
