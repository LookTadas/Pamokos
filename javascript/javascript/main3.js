console.log("1----------------------------------------------------------------------------")

// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.

let count = 0;
let rng1 = "";

for (let i = 0; i <= 300; i++) {
    let rng = Math.round(Math.random() * 300);

    if (rng > 150) {
        count++;
    }

    if (rng > 275) {
        rng1 += "[" + rng + "] ";
    }
    else {
        rng1 += rng + " ";
    }
}
console.log(rng1);
// console.log(rng1 + " " + "[" +rng1+"]");

console.log("skaičiai didesni už 150 - " + count);


console.log("2----------------------------------------------------------------------------")
// Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.

let rng2 = "";

for (let i = 0; i <= 3000; i++) {

    if (i % 77 == 0) {
        rng2 += i + ", ";
    }
}
console.log(rng2.slice(0, -2));

console.log("3----------------------------------------------------------------------------")
// Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”.
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *


// for (let i = 0; i <= 100; i++) {
//     let star1 = "";
//     for (let i = 0; i <= 100; i++) {
//         star1 += "*";
//         // console.log(star2);

//     }
//     console.log(star1);
// }


console.log("4----------------------------------------------------------------------------")

//     Prieš tai nupieštam kvadratui nupieškite istrižaines zaigzdute pakeisdami kitu simboliu. (reikės išsiaiškinti, kaip atvaizduoti tekstą HTML)
// * * * * * * * 
// * * * * * * * 
// * * * * * * * 
// * * * * * * *
// * * * * * * * 
// * * * * * * * 
// * * * * * * * 
// let ilgis = 20
// let plotis = 20
// let ratio1 = 20/20

// for (let i = 0; i < 100; i++) {
//     let star1 = "";
//     for (let i1 = 0; i1 < 100; i1++) {    
//         diff1 = ((i*1), 10);
//         if(diff1 == i1){
//             star1 = "*";
//         }
//         if(i1 = 100 - diff1 - 1){
//             star1 = "O";
//         }

//     }
//     console.log(star1);
// }



// let width = 100
// let height = 100
// let ratio = width/height; 

// for (let row = 0; row < height; row++) {
//     let star1 = ""
//     for (let col = 0; col < width; col++) {
//         let diff = parseInt((row * ratio));
//         star1 = "x";
//         // if(diff == col ){
//         //     star1 = "O";
//         // }
//         // if(col == 100 - diff - 1){
//         //     star1 = "*";
//         // }


        
//         // star1 = (diff == col || col == width - diff - 1 ? 'O' : '*')
            
//         // if(col == width - 1) {
//         //     // document.write ('<br>')
//         // }
//     }
//     console.log(star1)
// }

console.log("5----------------------------------------------------------------------------")

// Metam monetą. Monetos kritimo rezultatą imituojam Math.random() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// Iškritus herbui;
// Tris kartus iškritus herbui;
// Tris kartus iš eilės iškritus herbui;

console.log("sustoja ties herbu.")
while (true) {
    let coin = Math.round(Math.random());

    if (coin == 1) {
        console.log("S");
    }
    else {
        console.log("H");
        break;
    }

}

console.log("sustoja, kai herbas iškrenta tris kartus.");
let countH = 0;
while (true) {
    let coin2 = Math.round(Math.random());

    if (coin2 == 1) {
        console.log("S");
    }
    else {
        countH++;
        console.log("H");

    }
    if (countH == 3) {
        break;
    }

}

console.log("sustoja, kai hearbas iškrenta tris kartus iš eilės.");

let countTripleH = 0;
while (true) {
    let coin2 = Math.round(Math.random());

    if (coin2 == 1) {
        console.log("S");
        countTripleH = 0;
    }
    else {
        countTripleH++;
        console.log("H");
    }
    if (countTripleH == 3) {
        break;

    }

}

console.log("6----------------------------------------------------------------------------")

// Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų letdus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo letdas​”. Taškų kiekį generuokite funkcija ​Math.random()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.


let result1 = 0;
let result2 = 0;

while (true) {
    let petras = (20 + Math.round(Math.random() * (10 - 20)));
    let kazys = (25 + Math.round(Math.random() * (5 - 25)));

    if (result1 < 222) {
        result1 += petras;
        // console.log(petras);
    }
    if (result2 < 222) {
        result2 += kazys;
        // console.log(kazys);
    }
    if(result1 >= 222){
        console.log("Laimėjo Petras " + result1);
        break;
    }
    if(result2 >= 222){
        console.log("Laimėjo Kazys " + result2);
        break;
    }
   
}

console.log("7----------------------------------------------------------------------------")

// Reikia nupaišyti pilnavidurį rombą, taip pat, kaip ir pilnavidurį kvadratą (https://lt.wikipedia.org/wiki/Rombas), kurio aukštis 21 eilutė.

console.log("8----------------------------------------------------------------------------")

//     Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami Math.random() funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą).
// “Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
// “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite Math.random() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.

let hitCount = 0;
let hitLenght = 0;
let allHits = 0;

while(true){
    let hit = (20 + Math.round(Math.random() * (5 - 20)))
    if(hitLenght <= 85){
        hitLenght += hit;
        hitCount++;
    }else{
        allHits++;
        hitLenght = 0;
    }
    if(allHits == 5){
        console.log(hitCount);
        break;
    }
}

let hitBigCount = 0;
let hitBigLenght = 0;
let allBigHits = 0;

while(true){
    let prob = (Math.round(Math.random() <= 0.5));
    let hit = ((30 + Math.round(Math.random() * (20 - 30))) * prob);
    if(hitBigLenght <= 85){ 
        hitBigLenght += hit;
        hitBigCount++;
    }else{
        allBigHits ++;
        hitBigLenght = 0;
    }
    if(allBigHits == 5){
        console.log(hitBigCount);
        break;

    }
}

console.log("9 užduotis ------------------------------------------------------------")
// Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių nuo 1 iki 200, atskirtų tarpais. Skaičiai turi būti unikalūs (t.y. nesikartoti). Sugeneruokite antrą stringą, pasinaudodami pirmu, palikdami jame tik pirminius skaičius (t.y tokius, kurie dalinasi be liekanos tik iš 1 ir patys savęs). Skaičius stringe sudėliokite didėjimo tvarka, nuo mažiausio iki didžiausio. (reikės split() funkcijos ir masyvų.)

console.log("etiudai ------------------------------------------------------------")
// 1. Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
// 2. Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
// 3. Sukurkite masyvą su dešimt augalų pavadinimų.
// 4. Atspausdinkite kiekvieną 3čio uždavinio kiekvieną augalą atskiroje eilutėje.
// 5. Atspausdinkite 3čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
// 6. Atspausdinkite kas antrą skaičių nuo 10 iki 50 (pornius);
// 7. Atspausdinkite kas antrą skaičių nuo 10 iki 50. (pornius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus poriius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
// 8. Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
// 9. Suskaičiuokite kiek 3čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.











