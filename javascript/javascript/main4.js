console.log("0 uzduotis");
// 1. Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir gražintų reikšmę (paduodate du parametrus, skaičių ir laipsnį)
let pow = 0;
function powerUp(nr, nr2) {
   return nr ** nr2;
    
}

console.log(powerUp(3, 4));

console.log("1 uzduotis lengvesnis");
// 2. Sukurkite funkciją kuri priimtų du kintamuosius, juos sudaugintų ir atspausdintų sandaugą į konsolę.


function dauginam(a, b) {
    return a * b;
    
}

console.log(dauginam(2, 3));

console.log("2 uzduotis lengvesnis");

// Sukurkite funkciją kuri priimtų vieną kintamąjį, vardą. Ir konsolėje išspausdintų “labas “ ir tą paduotą vardą.

function labas(a){
    return ("Labas " + a);
}

console.log(labas("Tadas"));

console.log("3 uzduotis lengvesnis");

// Sukurkite funkciją  kuri priimtų vieną kintamąjį, tekstą. Ir konsolėje išspausdintų kiek simbolių yra tame tekste.

function letters(a){
    let regex = /[a-zA-Z-0-9]/g;
    return console.log(a.match(regex).length);
}

function letters2(a){
    return console.log(a.length);
}
letters("hello world 1000");
letters2("hello world 1000");

console.log("4 uzduotis lengvesnis");

// Sukurkite funkciją kuri priimtų 2 kintamuosius tekstus, vardą, pavardę ir atspausdintų inicialus. T.y vardo ir pavardės pirmąsias raides DIDŽIOSIOMIS raidėmis.


function inicialai(a){
    let arr = a.split(" ");
    b = "";
    for (let i = 0; i < arr.length; i++) {
        b +=arr[i].charAt() + " ";
    }
    return console.log(b);
    
}

inicialai("Jonas Jonaitis")

console.log("5 uzduotis lengvesnis");

//  Sukurkite HTML div’ą su id “numberPlace”. Parašykite funkciją kuri priimtų kintamąjį, skaičių ir jį atspausdintų tame HTML elemente.

function spausdink(a){
    return document.getElementById("numberPlace").innerHTML = "<p>" + a + "</p>";
}

spausdink(14);
console.log("6 uzduotis lengvesnis");
// Parašykite funkciją kuri nustatytų kas bus sekantis Lt prezidentas.

console.log("7 uzduotis lengvesnis");
// Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspaustintų koncolėje vienoje eilutėje atskurtus kableliais.

function rnd(){
    let a = (Math.round(Math.random()*5));
    let b = (Math.round(Math.random()*5));
    let c = (Math.round(Math.random()*5));

return console.log(a + " " + b + " " + c)
}

rnd();

console.log("8 uzduotis lengvesnis");
// Parašykite funkciją kuri priimtų du kintamuosius “nuo” ir “iki”. Funkcija turi sugeneruoti random skaičių tame intervale ir jį GRAŽINTI.

function exRnd(a, b){
    let high = 0;
    let low = 0;

    if(a > b){
        high = a;
    }
    else{
        low = b;
    }

    return console.log((high + Math.round(Math.random() * (low - high))));
    
}
exRnd(25, 10);

console.log("9 uzduotis lengvesnis");
// Sukurkite HTML div’ą su id “sequence”. Parašykite funkciją kuri sugeneruotų 10 p tagų su skaičiais juose nuo 1 iki 10 ir atiduotų į tą HTML elementą. Rezultate HTML’e turi matytis 10 p tagų su skaičiais iš eilės. Šie TURI BŪTI SUGENERUOTI JAVASCRIPTU.


