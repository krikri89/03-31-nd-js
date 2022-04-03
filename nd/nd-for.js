//Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.
for (i = 0; i < 5; i++) {
  console.log("Labas");
}
console.log("--------------------------");
/*Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje).*/

for (i = 0; i < 5; i++) {
  console.log(i);
}
console.log("----------------------------");
/*Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje).*/
for (i = 0; i < 5; i++) {
  console.log(i * 10);
}
console.log("----------------------------------");
/*Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje).*/

for (i = 49; i < 54; i++) {
  const diff = 0;
  console.log(i);
}
console.log("-----------------------------");
/*Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).*/

for (i = 0; i < 5; i += 1) {
  console.log(i * 2.5);
}
console.log("---------------------------------");
/*Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.*/
for (i = 1; i < 20; i += 1) {
  console.log(i++);
}
console.log("----------------------------------");
/*Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.*/
for (i = 0; i < 11; i += 1) {
  console.log(i, `x`, i);
}
console.log("------------------------------------");
/*Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekranelentelę nuo 1 iki n colius centimetrais.*/

for (i = 1; i < 10; i++) {
  console.log(i, `cm =`, i * 2.54, `Inch`);
}

console.log("-------------------------------------");
/*Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.*/

for (i = 100; i < 110; i++) {
console.log(i++, `€`);
}
console.log('------------------------------------');
/*Keliamieji metai turi 366 dienas, paprastieji–365. Visi metai, išskyrus šimtmečius, yra keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 –paprastieji. Raskite visus mūsų eros keliamuosius metus.*/
for (i=0; i<2022; i+=4) {
  console.log(i);
}