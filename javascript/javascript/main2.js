console.log("1-------------------------------------");
// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.

let firstName = "Woody";
let surname= "Harrelson";

if(firstName.length < surname.length){
    console.log(firstName);
}
else{
    console.log(surname);
}


console.log("2-------------------------------------");
// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)

console.log(firstName.toUpperCase() + " " + surname.toLowerCase());

console.log("3-------------------------------------");
// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

let inicialai = (firstName.charAt(0) + surname.charAt(0));

console.log(inicialai);

console.log("4-------------------------------------");
// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

let paskutinėsRaidės = firstName.slice(-3) + surname.slice(-3);

console.log(paskutinėsRaidės);

console.log("5-------------------------------------");
// Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

let title1 = "An American in Paris"

let title1Change = title1.replace(/[a,A]/g, '*');

console.log (title1Change);

console.log("6----------------------------------------")
// Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.

let title2 = "Breakfast at Tiffany's";
let title3 = "2001: A Space Odyssey";
let title4 = "It's a Wonderful Life";

console.log(title1.replace(/[aeiou]/gi, ''));
console.log(title2.replace(/[aeiou]/gi, ''));
console.log(title3.replace(/[aeiou]/gi, ''));
console.log(title4.replace(/[aeiou]/gi, ''));

console.log("7----------------------------------------")
// Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.

// let space = (Math.ceil(Math.random() * 10));
// let episode = (Math.ceil (Math.random() * 7)+1);
// let epo = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope";


while(true){
    let space = (Math.ceil(Math.random() * 10));
    let episode = (Math.ceil (Math.random() * 7)+1);
    let epo = "Star Wars: Episode "+ " ".repeat(space) + episode + " - A New Hope";
    if(episode == 6 && space == 1){
        console.log(epo);
        break;
    }
}

console.log("8 papildoma----------------------------------------")
// Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.

let sentence1 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood”";
let sentence2 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";

console.log(sentence1.replace(/[a-z]{6,10}/gi, ''));
console.log(sentence2.replace(/[a-z;ą]{6,10}/gi, ''));

console.log("9 papildoma----------------------------------------")
// Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.


console.log("10 papildoma----------------------------------------")
// Parašykite kodą, kuris generuotų atsitiktinį stringą su 10 atsitiktine tvarka išdėliotų žodžių, o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. Žodžiai neturi kartotis. (reikės masyvo)
